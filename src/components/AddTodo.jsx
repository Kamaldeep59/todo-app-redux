import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import {addTodo} from "../redux/actions/todo"
import { connect, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
const AddTodo = () => {

    const [todo,setTodo]=useState({
        title:'',
        description:'',
        id:''
    })

    const disptach=useDispatch()

    const handleSubmit=(event)=>{
        event.preventDefault()
        //add todo in store
        
        disptach(addTodo({...todo,id:v4()}))
        // console.log(todo)
        setTodo({
            title:'',
            description:''
        })
    }

  return (
  
    <Container>
        <Row>
            <Col md={12}>

                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>Add Todo here !!</h3>
                        <DisplayCount />

                        {/* form  */}

                        <Form onSubmit={handleSubmit}>
                            {/* title  */}
                            <Form.Group>
                                <Form.Label>Todo Title</Form.Label>
                                <Form.Control 
                                type='text' 
                                placeholder='Enter here'
                                value={todo.title}
                                onChange={event=>setTodo({...todo,title:event.target.value})}
                                 />
                            </Form.Group>

                            {/* description  */}
                            <Form.Group className='mt-3'>
                                <Form.Label>Todo Description</Form.Label>
                                <Form.Control 
                                as={'textarea'} 
                                type='text' 
                                placeholder='Enter here'
                                value={todo.description}
                                onChange={event=>setTodo({...todo,description:event.target.value})}
                               
                                
                                />
                            </Form.Group>

                            <Container className='text-center mt-3'>
                                <Button type='submit' variant='primary'>
                                    Add Todo
                                </Button>
                            </Container>

                        </Form>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}


// const mapStateToProps=(state)=>({})

// const mapDispatchToProps=(dispatch)=>({
//     addTodo:(todo)=>(dispatch(addTodo(todo)))
// })

// export default  connect(mapStateToProps,mapDispatchToProps) (AddTodo)
export default AddTodo