import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, Grid } from '@mui/material';
import Post from '../Components/Post';
import { Link } from '@mui/material';
export default function Profile() {
  return (
    <>
    <Grid sx={{ maxWidth: 345,marginLeft:{xl:70,sm:15,md:40}}}>
    <Card >
      <CardActionArea>
       <Avatar
       src='https://res.cloudinary.com/dezhi6orz/image/upload/v1669388201/USER_PROFILE/IMG_20220626_170807_Bokeh_2_sx4pdn.jpg'
       sx={{marginLeft:{xl:15,sm:15,md:15},marginTop:5,width:200,height:200}}
       />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Roixy
            
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            @tag
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A passionated Server side Learner
          </Typography>
          <Link href='/settings' sx={{textDecoration:'none'}} >
          <Button variant="outlined"  >Edit Profile</Button>
          </Link>
        </CardContent>
      </CardActionArea>
      
      
    </Card>
    <Post/>
    <Post/>
    
    </Grid>
    </>
   
  );
}