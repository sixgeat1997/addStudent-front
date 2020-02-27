import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Modal, Input, Row, Col, Icon, Divider } from 'antd'

const Std = () => {
    const [showStd, setShowstd] = useState([]);

    let [std, setStd] = useState({
        id: "",
        name: "",
        surname: "",
        major: "",
        gpa: 0
    })
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        getStd();
    }, []);

    const handleChange = (e) => {
        setStd({
            ...std,
            [e.target.name]: e.target.value
        })
    }
    const clickEdit = async () => {
        let sss = await axios.put('http://localhost:8000/student', std)
    }
    const getStd = async () => {
        let res = await axios.get("http://localhost:8000/student");
        setShowstd(res.data);

    };
    const clickDelete = async (id) => {
        let sss = await axios.delete(`http://localhost:8000/student/${id}`)
        alert(sss.data.message)

        getStd();

    }
    const showModal = (stds) => {
        setStd(stds)
        setVisible(true)

    };

    const handleOk = async e => {
        setVisible(false)
        await clickEdit()
        getStd();
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)

    };

    console.log(showStd);
    const stdTOHTML = () => showStd.length != 0 ? printStd() : (<Row type="flex" justify="center"><Icon type="user" className="zoom-icon" /></Row>)

    const printStd = () => {
        return showStd.map((stds, index) => {
            return (
                // <p key={index}>
                //     {stds.name} {stds.surname} : {stds.id}
                // </p>
                <Col md={6}>
                    <div className="card">

                        <Card title={stds.id} >
                            <p>Name : {stds.name} {stds.surname}</p>
                            <p>MAJOR : {stds.major}</p>
                            <p>GPA : {stds.gpa} </p>
                            <div>
                                <Button className="bt-space" onClick={() => showModal(stds)}>Edit student</Button>
                                <Button className="bt-space" onClick={() => clickDelete(stds.id)}>delete</Button>
                            </div>
                        </Card>
                    </div>
                </Col>

            )
        });

    };
    const clickAdd = async () => {
        let res = await axios.post('http://localhost:8000/student', std)
        alert(res.data.message)
        getStd();
    }
    return (
        <div>
            <div>
                <Modal
                    title="Edit"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Input placeholder="id" name="id" onChange={(e) => handleChange(e)} value={std.id} disabled /><br />
                    <Input placeholder="name" name="name" onChange={(e) => handleChange(e)} value={std.name} /><br />
                    <Input placeholder="surname" name="surname" onChange={(e) => handleChange(e)} value={std.surname} /><br />
                    <Input placeholder="major" name="major" onChange={(e) => handleChange(e)} value={std.major} /><br />
                    <Input placeholder="gpa" name="gpa" onChange={(e) => handleChange(e)} value={std.gpa} /><br />
                </Modal>
            </div>
            <Divider>
                <h1 style={{ textAlign: "center" }}>Show List</h1>

            </Divider>

            <Row type="flex" justify="center">
                {stdTOHTML()}
            </Row>
            <Divider>

                <h1 style={{ textAlign: "center" }}>ADD</h1>
            </Divider>
            <Row type="flex" justify="center">

                <div className="in-size-full-detail">

                    <form >
                        <Input placeholder="id" name="id" onChange={(e) => handleChange(e)} /><br />
                        <Input placeholder="name" name="name" onChange={(e) => handleChange(e)} /><br />
                        <Input placeholder="surname" name="surname" onChange={(e) => handleChange(e)} /><br />
                        <Input placeholder="major" name="major" onChange={(e) => handleChange(e)} /><br />
                        <Input placeholder="gpa" name="gpa" onChange={(e) => handleChange(e)} /><br />
                        <div className="bt-center-flex">

                            <Button className="bt-space" onClick={() => clickAdd()}>addStudent</Button>
                            {/* <Button className="bt-space" onClick={() => clickEdit()}>Edit student</Button><br /> */}
                        </div>



                    </form>

                    {/* <Input placeholder="id delete" name="id" onChange={e => deleteID(e)} />
            <div className="bt-center-flex">
                <Button className="bt-space" onClick={() => clickDelete()}>delete</Button>
            </div> */}

                </div>
            </Row>

        </div>
    );
};

export default Std;
