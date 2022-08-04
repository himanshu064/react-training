
import React from "react";
import { useState } from "react";
import Strip from "./Strip";
import { Form,Button } from "react-bootstrap"

const Task3 = () => {
  const [tasks, addTasks] = useState([]);
  const [viewtask, changeView] = useState('all');
  const handleSubmit = (e) => {
    e.preventDefault();
    let task = {
      'id': tasks.length + 1,
      'task': e.target.task.value,
      status: 'incomplete',
    };
    e.target.reset();
    addTasks([...tasks, task])
  }

  const changeStatus = (id, status) => {
    let allTasks = tasks;
    allTasks.find(task => task.id === id).status = status;
    addTasks([...allTasks]);
    console.log(allTasks);
  }
  return (
    <div className="container containerX">
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="text" placeholder="what needs to be done" name="task" />

        </Form.Group>
      </Form>
      {
        tasks.map(task => {
          if(viewtask == 'all'){
            return (
              <div className="row" key={task.id}>
                <Strip title={task.task} active={task.status === 'active' ? true : false} completed={task.status === 'complete' ? true : false} oncheck={() => changeStatus(task.id, 'active')} onclose={() => changeStatus(task.id, 'complete')} />
              </div>
            );
          }else if(viewtask == 'complete' && task.status == 'complete'){
            return (
              <div className="row" key={task.id}>
                <Strip title={task.task} active={task.status === 'active' ? true : false} completed={task.status === 'complete' ? true : false} oncheck={() => changeStatus(task.id, 'active')} onclose={() => changeStatus(task.id, 'complete')} />
              </div>
            );
          } else if (viewtask == 'active' && task.status == 'active'){
            return (
              <div className="row" key={task.id}>
                <Strip title={task.task} active={task.status === 'active' ? true : false} completed={task.status === 'complete' ? true : false} oncheck={() => changeStatus(task.id, 'active')} onclose={() => changeStatus(task.id, 'complete')} />
              </div>
            );
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
};

export default Task3;
