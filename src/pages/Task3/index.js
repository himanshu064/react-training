

import React from "react";
import { useState } from "react";
import Strip from "./Strip";
import { Form, Button } from "react-bootstrap";

function Task3() {
  const [tasks, setTasks] = useState([]);
  const [viewtask, changeView] = useState('all');

  function changeStatus(id, status) {
    let allTasks = tasks;
    allTasks.find(task => task.id === id).status = status;
    setTasks([...allTasks]);
    console.log(tasks);
  }


  function handleSubmit(e) {
    e.preventDefault();
    let taskObj = {
      id: tasks.length + 1,
      value: e.target.task.value,
      status: "Incomplete",
    };

    e.target.reset();
    console.log(tasks);
    setTasks([...tasks, taskObj]);
  }


  return (
    <div className="container containerX">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="what needs to be done"
            name="task"
          />
        </Form.Group>
      </Form>
      {
        tasks.map(task => {
          if (viewtask == 'all') {
            return (
              <div className="row" key={task.id}>
                <Strip title={task.value} active={task.status === 'active'} complete={task.status === 'complete'} oncheck={() => changeStatus(task.id, task.status == 'active' ? 'incomplete' : 'active')} onclose={() => changeStatus(task.id, task.status == 'complete' ? 'incomplete' : 'complete')} />
              </div>
            )
          } else if (viewtask == 'complete' && task.status == 'complete') {
            return (
              <div className="row" key={task.id}>
                <Strip title={task.value} active={task.status === 'active'} complete={task.status === 'complete'} oncheck={() => changeStatus(task.id, task.status == 'active' ? 'incomplete' : 'active')} onclose={() => changeStatus(task.id, task.status == 'complete' ? 'incomplete' : 'complete')} />
              </div>
            )
          } else if (viewtask == 'active' && task.status == 'active') {
            return (
              <div className="row" key={task.id}>
                <Strip title={task.value} active={task.status === 'active'} complete={task.status === 'complete'} oncheck={() => changeStatus(task.id, task.status == 'active' ? 'incomplete' : 'active')} onclose={() => changeStatus(task.id, task.status == 'complete' ? 'incomplete' : 'complete')} />
              </div>
            )
          }
        })
      }
      <div>
        <Button variant="primary" onClick={() => changeView('all')}>All</Button>{' '}
        <Button variant="danger" onClick={() => changeView('active')}>Active</Button>{' '}
        <Button variant="warning" onClick={() => changeView('complete')}>Completed</Button>{' '}
      </div>
    </div>
  );
}
export default Task3;





