import React, { useState } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'

const Addstd = () => {

    let [idDelete, setIddelete] = useState({
        id: ""
    })
    let [std, setStd] = useState({
        id: "",
        name: "",
        surname: "",
        major: "",
        gpa: 0
    })

    const handleChange = (e) => {
        setStd({
            ...std,
            [e.target.name]: e.target.value
        })
    }
    console.log(std);

    const clickAdd = async () => {
        let res = await axios.post('http://localhost:8000/student', std)
        alert(res.data.message)
    }

    const clickEdit = async () => {
        let sss = await axios.put('http://localhost:8000/student', std)
    }


    const deleteID = (e) => {
        setStd({
            [e.target.name]: e.target.value
        })
    }
    console.log(idDelete);

    const clickDelete = async () => {
        let sss = await axios.delete(`http://localhost:8000/student/${std.id}`)
        alert(sss.data.message)
        console.log(std);



    }



    return (
        <div className="in-size-full-detail">
             <h1 style={{textAlign:"center"}}>ADD</h1>
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
    )

}

export default Addstd