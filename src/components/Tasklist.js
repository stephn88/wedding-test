import React from "react";
import ReactDOM from "react-dom";
//import "./tasklist.css";

export class Tasklist extends React.Component {
  state = {
    tasks: [
      //18 months out//
      "Decide budget",
      "Pick venue",
      "Choose guests",
      "Pick ceremony type",
      "View and book venue",
      "Book registrar/celebrant",
      "Finalise guest list",
      "Buy wedding insurance",
      "Pick wedding party",
      //12 months out//
      "Send out Save the Dates",
      "Book transport",
      "Book entertainment",
      "Hire caters",
      "Start dress shopping",
      "Start looking for bridesmaids dresses",
      "Book hair and make-up artist/s",
      //9 months out//
      "Book a florist",
      "Choose your cake",
      "Order your dress (if you haven't already)",
      "Buy your bridal accessories",
      "Buy/make favours (if you want them)",
      "Give notice of marriage at local registrar",
      //6 months out//
      "Start shopping for groomswear",
      "Buy bridesmaids dresses",
      "Book honeymoon and minimoon (if you're having one)",
      "Buy wedding rings",
      "Organise first night accommodation",
      "Discuss order of service with registrar/vicar",
      "Choose ceremony reading, songs or poems",
      "Start writing vows (if you're writing your own",
      "Set up gift list",
      //3 months out//
      "Send invitations",
      "Alter dress and/or suit",
      "Have hair and makeup trial/s",
      "Enjoy your hen/stag do",
      "Break in shoes",
      "Write speeches",
      "Buy thank you presents",
      "Go menu tasting with caterers",
      "Make table plan",
      "confirm guest numbers and dietary requirements",
      //1 week out//
      "Have wedding rehearsal",
      "Confirm all bookings and vendors",
      "Finalise wedding day plan and DELEGATE",
      "Settle all final payments",
      "Collect hired items",
      "Pick up wedding day",
    ],
  };
  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

class SubmitForm extends React.Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === "") return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter wedding task"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

const Header = (props) => {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        You have {props.numTodos} Todos
      </h1>
    </div>
  );
};

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return <div className="list-wrapper">{todos}</div>;
};

const Todo = (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button
        class="delete is-pulled-right"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></button>
    </div>
  );
};

export default Tasklist;
//ReactDOM.render(<App />, document.querySelector("#root"));
