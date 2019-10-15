import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div>
      <Test
        message="Google"
        href="http://www.google.com"
      />
      <Test
        message="Facebook"
        href="http://www.facebook.com"
        />
    </div>
  );
}

export default App;
