import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Login from './Pages/Login'
import SignUp from "./Pages/Signup";

import Settings from "./Pages/Setting";
function App() {
  return (
   <BrowserRouter>
     <Navbar />
   <Routes>
        <Route exact path="/" element={<Home/>} />
         
        <Route exact path="/add" element={<Add/>} />
         
      
        <Route exact path="/SignUp" element={<SignUp/>}/>
         
        
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/post/:id">
     
        </Route>
        
        <Route exact path="/settings" element={<Settings/>}/>
        <Route exact path="/profile" />
       
       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
