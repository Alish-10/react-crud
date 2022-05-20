import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  //console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
      {console.log(users)}
          {users.map(user => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong >{user.layout}</strong>
              <strong style={{marginLeft:"15px"}}>{user.name}</strong>
              <strong style={{marginLeft:"15px"}}>{user.capacity}</strong>
              <strong style={{marginLeft:"15px"}}>{user.status}</strong>
              <strong>{user.image}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>
  )
}
