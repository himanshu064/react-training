import React, { useState, Fragment } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const Assignment4 = () => {
  const [tableData, setTableData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [enteredData, setEnteredData] = useState([
    {
      fname: "",
      lname: "",
      phone: "",
      ischecked: false,
    },
  ]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const combine = [...tableData, ...enteredData];
    setTableData(combine);
    console.log(combine, "combinned data");
    console.log(enteredData, "enteredData");
    console.log(tableData, "TableData");
    setEnteredData([
      {
        fname: "",
        lname: "",
        phone: "",
        ischecked: false,
      },
    ]);
  };
  const deleteAll = (e) => {
    const values = [...tableData];
    const data = values.filter((item) => {
      if (!item.ischecked) {
        return item;
      }
    });
    setTableData(data);
  };
  const editAll = (e) => {
    setEditing(true);
    const values = [...tableData];
    const data = values.filter((item) => {
      if (item.ischecked) {
        return item;
      }
    });
    setEnteredData(data);
  };
  const deleteOne = (index) => {
    console.log(index);
    const values = [...tableData];
    values.splice(index, 1);
    setTableData(values);
  };
  const handleAddFields = () => {
    const values = [...enteredData];
    values.push({
      fname: "",
      lname: "",
      phone: "",
      ischecked: false,
    });
    setEnteredData(values);
  };
  const handleRemoveFields = (index) => {
    const values = [...enteredData];
    values.splice(index, 1);
    setEnteredData(values);
  };
  const handleInputChange = (index, event) => {
    const values = [...enteredData];
    if (event.target.name === "fname") {
      values[index].fname = event.target.value;
    }
    if (event.target.name === "lname") {
      values[index].lname = event.target.value;
    }
    if (event.target.name === "phone") {
      values[index].phone = event.target.value;
    }
    if (event.target.name === "check") {
      values[index].ischecked = event.target.checked;
    }

    setEnteredData(values);
  };
  const editOne = (index) => {
    setEditing(true);
    const value = [tableData[index]];
    console.log(index);
    console.log(enteredData, "enteredd data is ");
    setEnteredData(value);
  };
  const checkAll = (event) => {
    const values = [...tableData];
    values.forEach((item) => {
      item.ischecked = event.target.checked;
    });
    setTableData(values);
  };

  const changeCheck = (index) => {
    const values = [...tableData];
    values.forEach((item, idx) => {
      if (idx === index) {
        item.ischecked = !item.ischecked;
        console.log(index, "index");
      }
    });
    setTableData(values);
  };
  const updateData = (e) => {
    e.preventDefault();
    setEditing(false);
    setEnteredData([
      {
        fname: "",
        lname: "",
        phone: "",
        ischecked: false,
      },
    ]);
    const values = [...tableData];
    values.forEach((item) => {
      item.ischecked = false;
    });
  };
  return (
    <>
      <Container>
        <div style={{ textAlign: "center", fontSize: "4rem" }}>
          Assignment 4
        </div>
        <Form className={styles.form}>
          <Container fluid>
            <Row>
              {enteredData.map((data, index, arr) => {
                return (
                  <Fragment key={`${data}~${index}`}>
                    <Col md={12} className={styles.customColumn}>
                      <Form.Group className={styles.divDivision}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="fname"
                          value={data.fname}
                          type="text"
                          placeholder="First Name"
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </Form.Group>
                      <Form.Group className={styles.divDivision}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lname"
                          value={data.lname}
                          type="text"
                          placeholder="Last Name"
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </Form.Group>
                      <Form.Group className={styles.divDivision}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          name="phone"
                          value={data.phone}
                          type="text"
                          placeholder="Phone Number"
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </Form.Group>
                      <Form.Group
                        className={styles.divDivision}
                        style={{ marginTop: "auto" }}
                      >
                        <Button
                          onClick={() => handleRemoveFields(index)}
                          hidden={arr.length - 1 === index ? true : false}
                        >
                          -
                        </Button>
                        <Button
                          onClick={() => handleAddFields(index)}
                          hidden={arr.length - 1 === index ? false : true}
                        >
                          +
                        </Button>
                      </Form.Group>
                    </Col>
                  </Fragment>
                );
              })}

              <Col className={styles.submitBtn}>
                {editing ? (
                  <Button onClick={updateData}> Update</Button>
                ) : (
                  <Button type="submit" onClick={onFormSubmit}>
                    {" "}
                    Submit
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Form>
        <div>
          <Button
            variant="danger"
            className={styles.deleteBtn}
            onClick={() => {
              deleteAll();
            }}
          >
            Delete Multiple
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              editAll(e);
            }}
          >
            Edit Multiple
          </Button>
          <div>
            <Table hover>
              <thead>
                <tr style={{ backgroundColor: "azure" }}>
                  <th>
                    <input
                      type="checkbox"
                      name="check"
                      // checked={isAllChecked}
                      onClick={(e) => {
                        checkAll(e);
                      }}
                    />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            name={item.fname}
                            checked={item.ischecked}
                            onChange={() => changeCheck(index)}
                          />
                        </td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Button
                            variant="danger"
                            className={styles.deleteBtn}
                            onClick={() => {
                              deleteOne(index);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => {
                              editOne(index);
                            }}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Assignment4;
