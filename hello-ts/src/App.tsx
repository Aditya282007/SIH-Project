import React from 'react';
import Todo from './components/Todo';

const myTodoItems = [
  {
    id :1,
    title : 'I need to finish my hw'
  },
  {
    id :2,
    title : 'I need to watch youtube'
  }
]

const App: React.FC = () => {
  return (
    <div>
        <Todo items={myTodoItems} id={0} title={''}/>
        <Todo items={myTodoItems} id={0} title={''}/>
        <Todo items={myTodoItems} id={0} title={''}/>
    </div>
  )
}

export default App;