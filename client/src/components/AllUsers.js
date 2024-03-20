import { Table, TableHead ,TableBody,TableCell, TableRow, Button } from '@mui/material'
import React, { useState } from 'react'
import {getUsers,deleteUser} from '../service/api.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllUsers = () => {
  const[users,setUsers]=useState([])
  
  useEffect(()=>{
    getAllUsers();
  },[])

  const getAllUsers=async()=>{
    const response = await getUsers()
    setUsers(response.data)
  }

  const deleteUserDetails=async(id)=>{
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <>
      <Table>
        <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Update User Data</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {
            users.map((curUser)=>{
              return (
              <TableRow key={curUser._id}>
                  <TableCell>{curUser.name}</TableCell>
                  <TableCell>{curUser.username}</TableCell>
                  <TableCell>{curUser.email}</TableCell>
                  <TableCell>{curUser.phone}</TableCell>
                  <TableCell>
                    <Link to={`/edit/${curUser._id}`}><Button>Edit</Button></Link>
                    <Button onClick={()=>{deleteUserDetails(curUser._id)}}>Delete</Button>
                  </TableCell>
              </TableRow>
              )
            })
        }
        </TableBody>
      </Table>
    </>
  )
}

export default AllUsers