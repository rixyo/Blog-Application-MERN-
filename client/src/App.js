import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Pages/CreatePost";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
   <BrowserRouter>
     <Navbar />
   <Routes>
        <Route exact path="/" element={<Home/>} />
         
        <Route exact path="/add" element={<Add/>} />
         
      
        <Route path="/register">
         
        </Route>
        <Route path="/login"></Route>
        <Route path="/post/:id">
     
        </Route>
        <Route path="/write"></Route>
        <Route path="/settings">
       
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
