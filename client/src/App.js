import {useState,useEffect}from 'react'
import { BrowserRouter, Routes, Route,Outlet,Navigate } from "react-router-dom";
import CreatePost from './Pages/CreatePost';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Login from './Pages/Login'
import SignUp from "./Pages/Signup";
import  secureLocalStorage  from  "react-secure-storage";
import Settings from "./Pages/Setting";
import DataProvider from "./context/DataProvider";
import DetailView from './Components/PostDetail';
import UpdatePost from './Components/Update';



const PrivateRoute = ({ isAuthenticated, ...props }) => {

  
  const Token = secureLocalStorage.getItem("Token");
 
 
 
  if(Token){
    isAuthenticated=true

  } 

  return Token && isAuthenticated ? 
    <>
      <Navbar />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {
 
  const [isAuthenticated,isUserAuthenticated] = useState(false);
 
  return (
    <DataProvider>
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}  />} />
          <Route path='/singup' element={<SignUp  />} />
          
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}  />} >
            <Route path='/create' element={<CreatePost />} />
          </Route>
          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>
            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<UpdatePost />} />
            </Route>
            
            


          


        

          <Route path='/settings' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  </DataProvider>
);
  
}

export default App;
