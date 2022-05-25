import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./pages/Home"
import CreateUser from "./pages/CreateUser"
import CreateEvent from "./pages/CreateEvent"
import AllUsers from "./pages/AllUsers"
import AllEvents from "./pages/AllEvents"
import Login from "./pages/Login"

import AppNavbar from './components/AppNavbar';
import EventCard from './components/EventCard';


function App() {
  return (
    <BrowserRouter>
      <AppNavbar/>
      {/* <EventCard /> */}
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/register" element={ <CreateUser/> }/>
        <Route path="/createEvent" element={ <CreateEvent/> }/>
        <Route path="/allUsers" element={ <AllUsers/> }/>
        <Route path="/allEvents" element={ <AllEvents/> }/>
        <Route path="/login" element={ <Login/> }/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
