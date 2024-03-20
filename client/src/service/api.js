import axios from 'axios'
const url='http://localhost:8000'

export const addUser=async(data)=>{
    try {
       const response = await axios.post(`${url}/adduser` ,data)
        if(response.status===200){
            alert("user added successfully")
        }
    } 
    catch (error) {
        console.log('Error while calling add user api' , error)    
    }
}

export const getUsers=async()=>{
    try {
       return  await axios.get(`${url}/getusers`)
    } 
    catch (error) {
        console.log('Error while getting users from the databse ',error)    
    }
}

export const getUser=async(id)=>{
    try {
       return  await axios.get(`${url}/getuser/${id}`)
    } 
    catch (error) {
        console.log('Error while getting user from the databse ',error)    
    }
}

export const editUser=async(input, id)=>{
    try {
       return  await axios.put(`${url}/${id}` , input)
    } 
    catch (error) {
        console.log('Error while editing user from the databse ',error)    
    }
}

export const deleteUser=async(id)=>{
    try {
       return  await axios.delete(`${url}/${id}`)
    } 
    catch (error) {
        console.log('Error while deleting user from the databse ',error)    
    }
}


