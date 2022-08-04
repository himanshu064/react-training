
import { useState } from "react";
import Strip from "./Strip";
import { Form } from "react-bootstrap"
const Task3 = () => {
  const [tasks, addTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let task = {
      'id': tasks.length + 1,
      'task': e.target.task.value,
      'status': 'incompleted',
    };
    addTasks([...tasks, task])
  }
  return (
      <div className="container">
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="text" placeholder="what needs to be done" name="task" />

          </Form.Group>
        </Form>
        {
          tasks.map(task => {
            return (
              <div className="row">
                <Strip key={task.id} title={task.task} className="col-sm-6" />
              </div>
            );
          })
        }
      </div>

  );
};

export default Task3;
