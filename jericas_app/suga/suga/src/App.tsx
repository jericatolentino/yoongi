import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Containers/Navigation';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App App-Center">
        <Navigation/>
        <p>
          Hi Main content
        </p>
    </div>
  );
}

export default App;
