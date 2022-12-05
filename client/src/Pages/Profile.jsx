import React,{useContext,useState,useEffect} from 'react'


import {Typography,IconButton,Box,Skeleton,Stack,CardMedia,Card,CardContent,Grid,Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {API} from "../api/api"
import { DataContext } from '../context/DataProvider';
import Post from '../Components/Post';
const Profile = () => {
    const { user } = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, [3000]);
    const [posts,getPosts]=useState([])
    useEffect(() => {
      const fetchData = async () => { 
          let response = await API.Profile();
          
              getPosts(response.data);
            
          
      }
      fetchData();
  }, []);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (
        
    <Card sx={{ marginTop:10 }}>
      
        <CardMedia sx={{ height:296,width:296,borderRadius: '50%'}}
          component="img"
          height="140"
          image={user?.image}

          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user?.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
           @{user?.tag}
          </Typography>
        
        
          <IconButton href={user?.github}>
            <GitHubIcon/>
          </IconButton>
          <Typography variant="body2" color="text.secondary">
           {user?.bio}
          </Typography>
          
          <Button variant="contained" sx={{marginTop:2,marginBottom:10}} href="/settings">Edit Profile</Button>
         
        </CardContent>
     
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  direction="row">
        {
                posts.posts?.length>0 ? posts.posts.map(post => (
                    < Grid>
                     
                            <Post  post={post} />
                        
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available
                    </Box>
            }
        </Grid>
     
     
    </Card>
    
        )}
    
    </Box>
  )
}

export default Profile