import { FormControl, FormGroup ,InputLabel,Input, Typography,styled,Button} from "@mui/material"
import React, { useState } from "react"
import {useNavigate,useParams}from 'react-router-dom'
import { useEffect } from "react"
import { getUser,editUser } from "../service/api"

const Container = styled(FormGroup)`
        width:50%;
        margin:5% auto 0 auto;
        & > div {
            margin-top:20px;
        };
`

const EditUser = () => {
    const {id} = useParams();

    useEffect(()=>{
        const loadUserDetails=async()=>{
            const response = await getUser(id);
            setInput(response.data)
        }
        loadUserDetails();
    },[id])


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
     const editUserDetails=async()=>{
        await editUser(input , id);  
        navigate("/allusers")
     }

  return (
    <>
    <Container>
        <Typography variant="h4">Edit User</Typography>
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
            <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
        </FormControl>
    </Container>
    </>
  )
}

export default EditUser
