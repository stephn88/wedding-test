import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Tasklist(props) {
  let newTasks = props.givenTasks; //creating new task array

  //, () => {
  //const localData = localStorage.getItem("tasks");
  // return localData ? JSON.parse(localData) : [];
  // });

  //useEffect(() => {
  //localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const savedTasks = JSON.parse(localStorage.getItem(props.tasksReference));
  if (savedTasks != null) {
    newTasks = savedTasks;
  } //checking to see if there is a tasklist stored under given name

  const [tasks, setTasks] = useState(newTasks); //tasks that are the given task or saved tasks will be displayed

  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  };

  useEffect(() => {
    localStorage.setItem(props.tasksReference, JSON.stringify(tasks)); //useEffect is saving current state of lists when they are altered
  });

  return (
    <div>
      <div>
        <Header numTodos={tasks.length} />
        <TodoList tasks={tasks} onDelete={handleDelete} />
        <SubmitForm onFormSubmit={handleSubmit} />
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
    if (term === "") return;
    props.onFormSubmit(term);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <h1>You have {props.numTodos} tasks</h1>
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
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Tasklist;
//ReactDOM.render(<App />, document.querySelector("#root"));
