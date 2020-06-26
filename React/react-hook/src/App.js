import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange };
}

function useFetch() {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const callUrl = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/');

      setPayload(data.results[0].picture.large);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Using useEffect when only mount
  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

function App() {
  const name = useInput('');
  const { payload, loading, error } = useFetch();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <input {...name} placeholder="name?" />
      <div>
        {loading && <span>loading your cat</span>}
        {!loading && error && <span>{error}</span>}
        {!loading && payload && (
          <img src={payload} width="150" height="200" alt="random"></img>
        )}
      </div>
      {name.value}

      <div>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        {count}
      </div>
    </div>
  );
}

export default App;
