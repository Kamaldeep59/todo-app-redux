import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import DisplayCount from './DisplayCount'
import { deleteTodo } from '../redux/actions/todo'
const DisplayTodos = () => {

    // useSelector
    const todos=useSelector(state=>state.todos)
    // const currentUser=useSelector(state=>state.currentUser)
    const dispatch=useDispatch()


  return (
  
    <Container>
        <Row>
            <Col>

                <Card className='mt-3 shadow-sm'>

                    <Card.Body>
                        <h3>All todos are here</h3>
                        <DisplayCount />
                        <ListGroup>
                        {
                            todos.map((todo,index)=>(
                               
                                    <ListGroup.Item key={index}>
                                        <h4>{todo.title}</h4>
                                        <p>{todo.description}</p>
                                        <Button onClick={event=>{
                                            dispatch(deleteTodo(todo.id))
                                        }} variant='danger' size="sm">
                                            Delete
                                        </Button>
                                    </ListGroup.Item>
                              
                            ))
                        }
                          </ListGroup>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    </Container>
  )
}

// const mapStateToProps=(state)=>{
   
//     return {todos:state.todos}
// }

// const mapDispatchToProps=(dispatch)=>({
//     deleteTodo:(id)=>(dispatch(deleteTodo(id)))
// })

// export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos)
export default DisplayTodos

// useSelector
//useDispatch