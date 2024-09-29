import React from 'react';
import Block from './components/block';

const App = () => {
  return (
    <div className="board">
        <div className="row">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="row">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="row">
          <Block />
          <Block />
          <Block />
        </div>
    </div>
  )
}

export default App;