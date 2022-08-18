import React from 'react';
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import localeUS from "./locale";

const App = (props) => {
  const pageNumbers = [];
  
  function onShowSizeChange(current, pageSize) {
    console.log(current,"current");
    console.log(pageSize,"pasgesize");
  }
  
  function onChange(current, pageSize) {
    props.pageNumberIs(current,pageSize)
    // console.log('onChange:current=', current);
    
    // console.log('onChange:pageSize=', pageSize);
    
  }
  return (
  <Pagination
    selectComponentClass={Select}
    showQuickJumper
    showSizeChanger
    defaultPageSize={10}
    defaultCurrent={1}
    onShowSizeChange={onShowSizeChange}
    onChange={onChange}
    total={150}
    locale={localeUS}
  />
)};

export default App;