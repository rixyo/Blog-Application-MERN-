import  React,{useState} from 'react';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton,Typography,Grid,Box,Paper,TextField,CssBaseline,Link,Button,Avatar } from '@mui/material';
import {useNavigate} from'react-router-dom'
import {API} from '../api/api'
const theme = createTheme();

export default function SignUp () {
  const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const [github,setGithub]=useState('')
  const [bio,setBio]=useState('')
  const [error,setError]=useState('')
       //image upload states
       const [image, setImage] = useState(null);
       const [upladingImg, setUploadingImg] = useState(false);
       const [imagePreview, setImagePreview] = useState(null);
    const validateImg=(e)=>{ 
      const file = e.target.files[0];
      if (file.size >= 1048576) {
          return alert("Max file size is 1mb");
      } else {
          setImage(file);
          setImagePreview(URL.createObjectURL(file));
      }
    }

    const uploadImage=async()=>{
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset",process.env.REACT_APP_CLOUDINARY_KEY);
      try {
        setUploadingImg(true);
        const Cloudinary_url=process.env.REACT_APP_CLOUDINARY_URL
        let res = await fetch(Cloudinary_url, {
            method: "post",
            body: data,
        });
        const urlData = await res.json();
        setUploadingImg(false);
        return urlData.url;
        
      } catch (error) {
        setUploadingImg(false);
              console.log(error);
        
      }
    }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
        const url = await uploadImage(image);
        console.log(url)
        const newUser={
          bio,
          email,
           username,
          github,
         image:url,
         password,
        }
        console.log(bio)
         await API.userSignup(newUser)
      
        
        navigate('/login')
       
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=826&t=st=1667034950~exp=1667035550~hmac=8b537848c498d027a016bc92011cafd0058056652673676ee64aedf7fb0ce204)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/png, image/jpeg" type="file" onChange={validateImg}  />
        < AddPhotoAlternateIcon/>
      </IconButton>
      <>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
           
              <TextField
                margin="normal"
                required
                fullWidth
               
                label="Email Address"
               
                autoComplete="email"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              />
                    <TextField
                margin="normal"
                required
                fullWidth
              
                label="user name"
               
                
                autoFocus
                onChange={(e)=>setUsername(e.target.value)}
                value={username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
               
                label="Password"
                type="password"
            
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
              />
                        <TextField
                margin="normal"
                required
                fullWidth
              
                label="Bio"
                
               
                
                autoFocus
                onChange={(e)=>setBio(e.target.value)}
                value={bio}
              />
                    <TextField
                margin="normal"
                
                fullWidth
                type='url'
              
                label="GitHub Url"
            
            
                autoFocus
                onChange={(e)=>setGithub(e.target.value)} value={github}
              />
              {error&&<Typography>{error}</Typography>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {upladingImg}
                Sign Up
                
             
              
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {" have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
           
            </Box>
            </>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}