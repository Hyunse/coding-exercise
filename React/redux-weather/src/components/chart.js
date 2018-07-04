import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

/**
 * Get Average
 * 
 * @param {Object} data 
 */
function average(data) {
  return _.round(_.sum(data)/data.length);
}

/**
 * Chart Component
 * 
 * @param props
 */
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}