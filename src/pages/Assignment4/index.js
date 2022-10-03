import React, { useState, Fragment } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const Assignment4 = () => {
  const [tableData, setTableData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [enteredData, setEnteredData] = useState([
    {
      id: "",
      fname: "",
      lname: "",
      phone: "",
      ischecked: false,
    },
  ]);
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
  const dataSubmitted = (e) => {
    e.preventDefault();
    const combine = [...tableData, ...enteredData];
    const values = [...enteredData];
    const ids = values.map((item) => {
      return (item.id = Math.floor(Math.random() * 100));
    });
    setEnteredData(ids);
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
  const updateData = (e) => {
    console.log(enteredData);
    console.log(tableData);
    const dataOfTable = [...tableData];
    const dataOfFields = [...enteredData];
    const changingindex = dataOfFields.map((item) => {
      return item.id;
    });
    console.log(changingindex);
    const data = dataOfTable.map((item) => {
      dataOfFields.forEach((itm) => {
        if (itm.id === item.id) {
          item.fname = itm.fname;
          item.lname = itm.lname;
          item.phone = itm.phone;
          item.ischecked = false;
        }
      });
      return item;
    });
    console.log(data, "dsss");
    setEditing(false);
    setTableData(data);
    setEnteredData([{ fname: "", lname: "", phone: "", ischecked: false }]);
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
    const updateItems = [...tableData];
    const data = updateItems.filter((item) => item.ischecked === true);
    setEnteredData(
      data.map((items) => {
        const { fname, lname, phone, id, ischecked } = items;
        return {
          id: id,
          fname: fname,
          lname: lname,
          phone: phone,
          ischecked: ischecked,
        };
      })
    );
  };
  const deleteOne = (index) => {
    console.log(index);
    const values = [...tableData];
    values.splice(index, 1);
    setTableData(values);
  };

  const editOne = (index) => {
    setEditing(true);
    const updateOneItem = [...tableData];
    const data = updateOneItem.filter((item, idx) => index === idx);
    data.map((item) => {
      const { fname, lname, phone, id, ischecked } = item;
      return setEnteredData([
        {
          id: id,
          fname: fname,
          lname: lname,
          phone: phone,
          ischecked: ischecked,
        },
      ]);
    });
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
                  <Button onClick={(e) => updateData(e)}> Update</Button>
                ) : (
                  <Button onClick={(e) => dataSubmitted(e)}> Submit</Button>
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
