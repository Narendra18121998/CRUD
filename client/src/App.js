import React from 'react';
import AddUser from './components/AddUser'
import Navbar from './components/Navbar';
import WebDeveloper from './components/WebDeveloper';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<WebDeveloper/>} />
      <Route path="/allusers" element={<AllUsers/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/edit/:id" element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
