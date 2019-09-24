import React from 'react';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App pt-3 bg-dark">
        <h1 className="text-center text-white"> Welcome to DevOps </h1>
      </div>
    </Provider>    
  );
}

export default App;
