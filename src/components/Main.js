import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [

    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasksList = [...tasks];

    this.setState({
      tasks: [...newTasksList, newTask],
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>To do list</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={newTask} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
