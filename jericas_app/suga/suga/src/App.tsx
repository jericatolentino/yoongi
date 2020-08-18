import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Containers/Navigation';
import Form from './Containers/Form';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App App-Center">
        <Navigation/>
        <Form/>
    </div>
  );
}

export default App;
