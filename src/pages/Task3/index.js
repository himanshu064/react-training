
import { useState } from "react";
import Strip from "./Strip";
import { Form } from "react-bootstrap"
import Navbar from "../Navbar";

const Task3 = () => {
  const [tasks, addTasks] = useState([]);
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
    <>
      <Navbar />
      <div className="container">
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="text" placeholder="what needs to be done" name="task" />

          </Form.Group>
        </Form>
        {
          tasks.map(task => {
            return (
              <div className="row" key={task.id}>
                <Strip title={task.task} className="col-sm-6" oncheck={() => changeStatus(task.id, 'active')} onclose={() => changeStatus(task.id, 'complete')} />
              </div>
            );
          })
        }
      </div>
    </>

  );
};

export default Task3;
