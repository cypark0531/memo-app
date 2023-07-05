import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';


const Sort = () => {
    const categories = useSelector((state)=> state.category);
    const translate = (str) =>{
        return str==="type" ? "종류별" : "재료별";
    }
        
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
            <Accordion defaultActiveKey="0">
                {
                    Object.keys(categories).map( (key, index) =>{
                        return (
                            <Accordion.Item key={index} eventKey={key}>
                                <Accordion.Header>{translate(key)}</Accordion.Header>
                                <Accordion.Body style={{padding:"5px"}}>
                                    <div className="checkbox-container">
                                        {categories[key].map( (item , itemIndex) => {
                                            return (
                                                <Form key={key + itemIndex}>
                                                    <div>
                                                        <Form.Check type="checkbox" value={item.value} id={key+item.value} label={item.name} className="check-item">
                                                        </Form.Check>
                                                    </div>
                                                </Form>
                                            )
                                        })}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    );
};

export default Sort;