import React from "react";
import './App.css';
import MainComponent from "./components/MainComponent";
import {BrowserRouter} from 'react-router-dom';
import myStore from "./redux/Store";
import{Provider} from 'react-redux';

function App() {
  // console.log('app.js :', myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
