import  React from 'react';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton,Typography,Grid,Box,Paper,TextField,CssBaseline,Link,Button,Avatar } from '@mui/material';


const theme = createTheme();

export default function SignUp () {
  const handleSubmit = (event) => {
    event.preventDefault();
    
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
        <input hidden accept="image/*" type="file" />
        < AddPhotoAlternateIcon/>
      </IconButton>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
                    <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Knick Name"
                name="userName"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                    <TextField
                margin="normal"
                
                fullWidth
                type='url'
                id="url"
                label="GitHub Url"
                name="url"
            
                autoFocus
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
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
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}