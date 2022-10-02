import React, { useContext, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // input fields
  const [inputFields, setInputFields] = useState([
    {
      id: Math.floor(Math.random() * 100),
      name: "",
      course: "",
      rollno: "",
      checked: false,
    },
  ]);
  const [update, setUpdate] = useState(false);
  const [editAll, setEditAll] = useState(false);
  const [selected, setSelected] = useState([]);
  // tabledata
  const [tableData, setTableData] = useState([]);
  const HandleSubmit = (event) => {
    event.preventDefault();
    let combinedata = [...tableData, ...inputFields];
    setTableData(combinedata);
    // let combinedata = [...tableData, ...inputFields];
    setInputFields([
      {
        id: Math.floor(Math.random() * 100),
        name: "",
        course: "",
        rollno: "",
        checked: false,
      },
    ]);
  };
  const HandleChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  // to add morefields
  const MoreFields = () => {
    const newFields = [...inputFields];
    newFields.push({
      id: Math.floor(Math.random() * 100),
      name: "",
      course: "",
      rollno: "",
    });
    setInputFields(newFields);
  };
  // to delete single field
  const deleteSingle = (index) => {
    let deleteArray = [...tableData];
    deleteArray.splice(index, 1);
    setTableData(deleteArray);
  };
  // to chnage change status of check box
  const changeStatus = (index) => {
    let newTabledata = [...tableData];
    newTabledata.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.checked = !item.checked;
      }
    });
    let res = newTabledata.filter((item) => item.checked === true);
    setSelected([...selected, res]);
    setTableData(newTabledata);
  };
  // deleteMany
  const deleteMany = () => {
    const filterMany = [...tableData];
    const data = filterMany.filter((item) => {
      if (!item.checked) {
        return item;
      }
    });
    setTableData(data);
    setSelected([]);
  };
  //set input fields on edit button click
  const updateItem = (name) => {
    const updateOneItem = [...tableData];
    const data = updateOneItem.filter((item) => item.name === name);
    data.map((item) => {
      const { name, rollno, course, id } = item;
      return setInputFields([
        {
          id: id,
          name: name,
          rollno: rollno,
          course: course,
        },
      ]);
    });
    setUpdate(true);
  };
  // update single
  const updateSingle = () => {
    let inputFiledData = [...inputFields];
    let updatedData = [...tableData];
    let object = inputFiledData.reduce(
      (obj, item) =>
        Object.assign(obj, {
          id: item.id,
          name: item.name,
          course: item.course,
          rollno: item.rollno,
        }),
      {}
    );

    let Data = updatedData.map((item) => {
      if (item.id === object.id) {
        return {
          ...item,
          name: object.name,
          course: object.course,
          rollno: object.rollno,
        };
      }
      return item;
    });
    setTableData(Data);
    setInputFields([
      {
        name: "",
        course: "",
        rollno: "",
      },
    ]);
    setUpdate(false);
  };
  // update Multiple
  const updateMany = () => {
    let checkTrue = [...tableData];
    let data = checkTrue.filter((item) => item.checked === true);
    setInputFields(
      data.map((items) => {
        const { id, name, course, rollno } = items;
        return {
          id: id,
          name: name,
          course,
          rollno,
        };
      })
    );
    setEditAll(true);
  };
  const updateAll = () => {
    let tableToUpdate = [...tableData];
    let filedToData = [...inputFields];
    let res = tableToUpdate.map((inputItem) => {
      const { id } = inputItem;
      let index = filedToData.find((item) => item.id === id);
      if (index) {
        return index;
      }
      return inputItem;
    });
    setTableData(res);
    setInputFields([
      {
        name: "",
        course: "",
        rollno: "",
      },
    ]);
    setEditAll(false);
    setSelected([]);
  };
  return (
    <AppContext.Provider
      value={{
        inputFields,
        setInputFields,
        HandleSubmit,
        HandleChange,
        tableData,
        MoreFields,
        deleteSingle,
        changeStatus,
        deleteMany,
        updateItem,
        updateSingle,
        update,
        updateMany,
        updateAll,
        editAll,
        selected,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
