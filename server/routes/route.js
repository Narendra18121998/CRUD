import express from 'express'
const router = express.Router()
import {addUser , getUsers ,getUser,editUser,deleteUser} from '../controlllers/user-controller.js'


router.post('/adduser' ,addUser)
router.get('/getusers',getUsers)
router.get('/getuser/:id',getUser)
router.put('/:id' , editUser)
router.delete('/:id',deleteUser)

export default router;
