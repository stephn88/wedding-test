import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Tasklist(props) {
  const [tasks, setTasks] = useState(props.giventasks);
  //, () => {
  //const localData = localStorage.getItem("tasks");
  // return localData ? JSON.parse(localData) : [];
  // });

  //useEffect(() => {
  //localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  };

  return (
    <div>
      <div>
        <Header numTodos={tasks.length} />
        <TodoList tasks={tasks} onDelete={handleDelete} />
        <SubmitForm onFormSubmit={handleSubmit} />
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
      <button>Submit</button>
    </form>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>You have {props.numTodos} Todos</h1>
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
        Completed
      </button>
    </div>
  );
};

export default Tasklist;
//ReactDOM.render(<App />, document.querySelector("#root"));
