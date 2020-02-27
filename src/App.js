import React from 'react';
import './App.css';
import Std from './components/Std'
import Addstd from './components/Addstd'
import { Col, Row } from 'antd';

function App() {
  
  return (
    <div >
      <Row type="flex" justify="center">

      <Col md={24}>
        <Std />

      </Col>
      </Row>
      {/* <Row type="flex" justify="center">
        <Addstd />
      </Row> */}
     
      {/* <Col md={16}>
        <Addstd />
      </Col> */}



    </div>
  )
}

export default App;
