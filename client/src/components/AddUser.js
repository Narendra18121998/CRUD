import { FormControl, FormGroup ,InputLabel,Input, Typography,styled,Button} from "@mui/material"
import React, { useState } from "react"
import {addUser} from '../service/api'
import {useNavigate} from 'react-router-dom'
const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
        & > div {
            margin-top:20px;
        };
`

const AddUser = () => {
    const[input,setInput]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });

    const handleInput=(e)=>{
        console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,[name]:value
        })    
     }
     const navigate =useNavigate();
     const AddUserDetails=async()=>{
        await addUser(input);
        navigate("/allusers")
     }

  return (
    <>
    <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={handleInput} name="name" value={input.name} autoComplete="off" required/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={handleInput} name="username" value={input.username} autoComplete="off" required/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleInput} name="email" value={input.email} autoComplete="off" required/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={handleInput} name="phone" value={input.phone} autoComplete="off" required/>
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={AddUserDetails}>Add User</Button>
        </FormControl>
    </Container>
    </>
  )
}

export default AddUser
