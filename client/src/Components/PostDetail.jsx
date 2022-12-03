import { useState, useEffect, useContext } from 'react';

import { Box, Typography,Paper,CardHeader,CardActions,Stack,Avatar, styled, Button,IconButton,Link } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {  useNavigate, useParams } from 'react-router-dom'




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
    const Image = styled('img')({
        width: '50%',
        height: '50vh',
        objectFit: 'cover'
    });
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
                setUser(response.data.createdBy)
               
            }
        }
        fetchData();
    }, []);

    const deletePost = async () => {  
       await API.deletePost(post._id)
        navigate('/')
    }

    return (
     
               <Box >
    
    <CardHeader sx={{marginLeft:{xl:70,sm:15,md:40}}}
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src= {user.image} />
              
         }
          
          
        
          title={user.knickName}
          subheader={post.createdAt} />
          <Box sx={{marginLeft:{xl:70,sm:15,md:40}}}>
          <Image src={post.image || url} alt="post"  />
          </Box>
          <Stack direction="row" spacing={2} justifyContent='flex-end' >
          
  <Item>
  <Link href={`/update/${post._id}`}>
   
    <IconButton variant="outlined" color="success">
        <Edit/>
    </IconButton>
    </Link>
    
    </Item>
    
    <Item>
    <Button variant="outlined" color="error" onClick={()=>deletePost()}>
       
        <Delete/>
    </Button>
    </Item>
 
  
</Stack>
          
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
              <Typography>
              {post.description}

              </Typography>
              


              
              <CardActions disableSpacing>

       
      </CardActions>
          
          </Box>
           
           
      
    )
}

export default DetailView;
