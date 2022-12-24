import { useState, useEffect, useContext } from 'react';

import { Box, Typography,Paper,CardHeader,CardActions,Stack,Avatar, styled, Button,IconButton,Link,Skeleton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {  useNavigate, useParams } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comments from './Comments';



import { API } from '../api/api';

import { DataContext } from '../context/DataProvider';

// components




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DetailView = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, [3000]);
 
    const Image = styled('img')({
        width: '50%',
        height: '50vh',
        objectFit: 'cover'
    });
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [post, setPost] = useState({});
 
  

   
   
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(DataContext);
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
              
               
               
            }
        }
        fetchData();
    }, []);



    const deletePost = async () => {  
       await API.deletePost(post._id
       
       
        )
        navigate('/')
    }
    


    return (
     
               <Box >
                   <Box flex={4} p={{ xs: 0, md: 2 }}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (
            <>
     
    
    <CardHeader sx={{marginLeft:{xl:70,sm:15,md:40}}}
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src= {post.createdBy.image} />
              
         }
         
          
        
          title={post.createdBy.username}
          subheader={post.createdAt} />
          <Box sx={{marginLeft:{xl:70,sm:15,md:40}}}>
          <Image src={post.image || url} alt="post"  />
          </Box>
          <Stack direction="row" spacing={2} justifyContent='flex-end' >
           
           

           
  <Item>
  {post.createdBy._id===user?.id&&(
  <Link href={`/update/${post._id}`}>
   
    <IconButton variant="outlined" color="success">
        <Edit/>
    </IconButton>
    </Link>
  )}
    </Item>
    
    <Item>
    { post.createdBy._id===user?.id  &&  (
        
    <Button variant="outlined" color="error" onClick={()=>deletePost()}>
       
        <Delete/>
    </Button>
    )}
    


   
 
          
        
    </Item>
 
  
</Stack>

<CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
           {post.likeCount}
        </IconButton>
        
        </CardActions>

          
              <div className="postInfo">
                  <div className="postCats">
                      <span className="postCat">
                          
                             {post.tags}
                          
                      </span>
                      
                  </div>
                  <span className="postTitle">
                      
                      {post.title}

                     
                  </span>
                  <hr />
                 
                  
              </div>
              <Typography variant="body1" gutterBottom={true}>
              {post.description}

              </Typography>
              <Comments post={post}/>
              


              
            
        
         </>
         )}
         </Box>
          
          </Box>
           
           
      
    )
}

export default DetailView;

