import { Mail, Notifications, Pets,Home ,Create} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  IconButton, 
  Button
} from "@mui/material";
import {Link} from "@mui/material";
import React, { useState} from "react";
import { useNavigate} from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {




 const navigate=useNavigate()
  const [open, setOpen] = useState(false);
   

  
  const logout = () => {
 
  

    // CLEAR DATA FROM STORAGE
    secureLocalStorage.clear()

    navigate("/login");
}
  return (
    <AppBar position="sticky" sx={{backgroundColor:'black'}}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          inkLing
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Link href='/'>
        <IconButton sx={{color:'white'}}>
       
        < Home/>
      </IconButton>
      </Link>
      <Link href ='/create'>
      <IconButton sx={{color:'white'}}>
       
       < Create/>
     </IconButton>
     </Link>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
          
            onClick={(e) => setOpen(true)}
        
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            
          />
        
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link href ='/profile' sx={{textDecoration:'none'}}>
        <MenuItem>Profile</MenuItem>
        </Link>
        <Link href='/settings' sx={{textDecoration:'none'}}>
        <MenuItem >Settings</MenuItem>
        </Link>
        <MenuItem><Button variant="outlined" color="error"  onClick={()=> logout()}>
          Logout
          </Button></MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;