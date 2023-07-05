import React from 'react';
import Form from 'react-bootstrap/Form';

const menuType = [
    {name : "한식",value : "1",id : "1",},
    {name : "양식",value : "2",id : "2"},
    {name : "일식",value : "3",id : "3"},
    {name : "간편식",value : "4",id : "4"}
]
const Edit = () =>{
    
    return (
        <div>
            <div style={{margin: '0 auto' ,width:'50%'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>음식 제목</Form.Label>
                        <Form.Control type="text7" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>음식 설명</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select aria-label="Default select example" className="mx-2" style={{width:'48%',display:'inline'}}>
                            {menuType.map((item) => (
                                <option value={item.value}>{item.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        </div>
        )
}

export default Edit;