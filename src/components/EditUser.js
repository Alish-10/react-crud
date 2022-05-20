import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    layout: '',
    name: '',
    capacity: '',
    status: '',
    image: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])



  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Layout</Label>

          <select  value={selectedUser.layout} onChange={(e) => {setSelectedUser({ ...selectedUser, layout: e.target.value})}}>
          <option value="flex"> Flex</option>
          <option value="grid">Grid</option>
          </select><br />

        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={(e) => {setSelectedUser({ ...selectedUser, name: e.target.value})}} 
         name="name" placeholder="Enter Name" required></Input>

        <Label style={{marginTop:"10px"}}>Capacity</Label>
        <Input type="number" value={selectedUser.capacity} onChange={(e) => {setSelectedUser({ ...selectedUser, capacity: e.target.value})}}
        name="capacity" placeholder="Enter Number of Capacity" required></Input>

       <div style={{display:"flex", alignItems:"center"}}> 
        <Label><br />Status</Label> 
        <Input style={{marginLeft:"10px", position:"unset", marginTop:"15px"}}type="checkbox" checked={selectedUser.status} value={selectedUser.status} 
        onChange={(e) => {setSelectedUser({ ...selectedUser,status: (selectedUser.status? false:true) })}}name="status"></Input><br />
        </div>

        <Label>Image </Label>
        <input style={{marginLeft:"10px"}} type="file" onChange={(e) => {setSelectedUser({ ...selectedUser, image: e.target.files[0].name})}}name="image" accept="image/*" />
      
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
