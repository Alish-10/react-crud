import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [layout, setLayout]= useState('flex');
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus]= useState(false);
  const [image, setImage]= useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
     layout,
     name,
     capacity,
     status,
     image
    }
    addUser(newUser);
    history.push("/");
  }

  console.log(image);
 

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Layout</Label>

          <select style={{marginLeft:"10px",}} value={layout} onChange={(e)=>setLayout(e.target.value)}>
          <option value="flex"> Flex</option>
          <option value="grid">Grid</option>
          </select><br />
        <Label>Name</Label>
        <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" placeholder="Enter Name" required></Input>

        <Label style={{marginTop:"10px"}}>Capacity</Label>
        <Input type="number" value={capacity} onChange={(e)=>setCapacity(e.target.value)}name="capacity" placeholder="Enter Number of Capacity" required></Input>
       <div style={{display:"flex", alignItems:"center"}}> 
         <Label><br />Status</Label> 
        <Input style={{marginLeft:"10px", position:"unset", marginTop:"15px"}}type="checkbox" checked={status} value={status} onChange={(e)=>setStatus(status? false:true)}name="status"></Input><br />
        </div>
        <Label>Image </Label>
        <input style={{marginLeft:"10px"}} type="file"  onChange={(e)=>setImage(e.target.files[0].name)}name="image" accept="image/*" />
        
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
  }
