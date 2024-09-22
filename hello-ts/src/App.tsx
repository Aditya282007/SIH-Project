import React from 'react';
import Todo from './components/Todo';
import Counter from './components/Counter';

const myTodoItems = [
  {
    id :1,
    title : 'I need to finish my hw'
  },
  {
    id :2,
    title : 'I need to watch youtube'
  },
  {
    id : 3,
    title : 'I need to sleep early'
  }
];

const App: React.FC = () => {
  return (
    <div>
        <Todo items={myTodoItems} />
        <Counter />
    </div>
  )
}

export default App;