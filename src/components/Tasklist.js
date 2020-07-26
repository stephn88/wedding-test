import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Tasklist(props) {
  let newTasks = props.givenTasks; //creating new task array

  const savedTasks = JSON.parse(localStorage.getItem(props.tasksReference)); //saving in Local storage so the user won't be presented with the default list when they refresh the page
  if (savedTasks != null) {
    newTasks = savedTasks;
  } //checking to see if there is a tasklist stored

  const [tasks, setTasks] = useState(newTasks); //tasks that are the given task or saved tasks will be displayed

  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  }; //will add new tasks to the lists input by the user

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }; //makes a copy of the array, instead of updating it, so that react knows when/how to update the component accordingly when task is deleted

  useEffect(() => {
    localStorage.setItem(props.tasksReference, JSON.stringify(tasks)); //useEffect is saving current state of lists when they are altered
  });

  return (
    <div>
      <div>
        <Header numTodos={tasks.length} />
        {/*show how many tasks are left to do*/}
        <TodoList tasks={tasks} onDelete={handleDelete} />
        {/*displays the list of tasks and deletes then when the user presses the 'done' button*/}
        <SubmitForm onFormSubmit={handleSubmit} />
        {/*adds user's inputted task to the list */}
        <button
          className="reset-btn"
          onClick={() => setTasks(props.givenTasks)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function SubmitForm(props) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /*preventing the page from refreshing */
    }
    if (term === "") return;
    props.onFormSubmit(term);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/*input field for the user to add a task */}
      <input
        type="text"
        placeholder="Enter wedding task"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="sub-btn">Add task</button>
    </form>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>You have {props.numTodos} tasks</h1>{" "}
      {/*returns number of tasks left to complete */}
    </div>
  );
};

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo
        className="todo-content"
        content={todo}
        key={index}
        id={index}
        onDelete={props.onDelete}
      />
    );
  });
  return <div>{todos}</div>;
};

const Todo = (props) => {
  return (
    <div>
      {props.content}
      <button
        className="task-btn"
        onClick={() => {
          props.onDelete(props.id);
          {
            /*deletes task from list */
          }
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Tasklist;
