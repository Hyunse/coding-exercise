import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Home from './components/Home';
// import About from './components/About';
import './App.css';

const useSearch = (title) => {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(title) {
          setLoading(false);
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}`
          );
          const data = await response.data;
          setLoading(true);
  
          setMovie(data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [title]);

  return {loading, movie};
};

function App() {
  const [title, setTitle] = useState();
  const {loading, movie} = useSearch(title);

  const inputKeyUp = (e) => {
    const {
      target: { value },
      keyCode,
    } = e;

    if (keyCode === 13) setTitle(value);
  };

  return (
    <div className="App">
      <div>
        Title: <input type="text" onKeyUp={inputKeyUp} />
      </div>
      <Home movie={movie} loading={loading} />
      <Link to="/home">
        <Button color="primary">Home</Button>
      </Link>
      {/* <Link to="/about">
        <Button>About</Button>
      </Link> */}

      <Switch>
        <Route path="/home">
        </Route>
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  );
}

export default App;
