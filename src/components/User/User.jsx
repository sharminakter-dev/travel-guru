import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import dummyUser from '../../resources/images/user.png';

const User = () => {
  const user = useSelector(state=>state.auth.user);
//   console.log(user);
  return (
       <div className='d-flex justify-content-center align-items-center vh-100 border-top mx-5 mt-3 border-secondary-subtle' >
      <Card style={{ width: '18rem' }} className='border-0' >
        <Card.Img variant="top" src={user.dp||dummyUser} />
        <Card.Body>
            <Card.Title>{user.userName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item><span className='fw-bold'>UserId: </span> <small>{user.uid}</small> </ListGroup.Item>
            <ListGroup.Item><span className='fw-bold'>Email: </span> <small>{user.email}</small></ListGroup.Item>
        </ListGroup>
    </Card>
   </div>
  );
}


export default User;