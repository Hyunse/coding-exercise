import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment A', 'Comment B']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comments', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the texts for each comments', () => {
  expect(wrapped.render().text()).toContain('Comment A');
  expect(wrapped.render().text()).toContain('Comment B');
});