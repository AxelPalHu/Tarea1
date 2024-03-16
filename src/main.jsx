import React from 'react';
import ReactDOM from 'react-dom';
import TasksList from './TaskList';
import Table from './table'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksList />
    <Table />
  </React.StrictMode>
);