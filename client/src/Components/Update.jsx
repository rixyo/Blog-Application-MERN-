import {
    Avatar,
    Button,
    ButtonGroup,
  
    Stack,
    styled,
    TextField,
    IconButton,
 
    Typography,
  } from "@mui/material";
  import React, { useState,useContext,useEffect } from "react";
 
  import {Image,VideoCameraBack} from "@mui/icons-material";
  import { Box } from "@mui/system";
  import {API} from "../api/api"
  import {useNavigate,useParams}from 'react-router-dom'
  import { DataContext } from '../context/DataProvider';
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  const initialPost = {
    title: '',
    description: '',
    
    tags: ''
   
}

  
  const UpdatePost = () => {
  

    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(initialPost);
    const [user, setUser] = useState('')
 
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



   

    
    const handlePost=async(e)=>{
      e.preventDefault();
     
      
      
        await API.updatePost(post);
        navigate(`/details/${id}`);
         
        
          
        

    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
 
    return (
     
    
            
        <Box
        width={400}
        height={280}
        bgcolor={"background.default"}
        color={"text.primary"}
        p={3}
        borderRadius={5}
    sx={{marginLeft:{xl:70,sm:15,md:40}}}
    
       component='form'
       onSubmit={handlePost}
    
      >
        <Typography variant="h6" color="gray" textAlign="center">
          Create post
        </Typography>
        <UserBox>
          <Avatar
            src=''
            sx={{ width: 30, height: 30 }}
          />
          <Typography fontWeight={500} variant="span">
            
          </Typography>
        </UserBox>
        <Box marginTop={0}>
          <img src={post.image} alt="post" height='400' width='400' />
          </Box>
        <TextField
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
         
          placeholder="#Tag"
          variant="standard"
          onChange={(e) => handleChange(e)} value={post.tags} name='tags'
        />
      
        <TextField
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={0}
          placeholder="Give a Title"
          variant="standard"
          onChange={(e) => handleChange(e)} value={post.title} name='title'
        />
       
           <TextField
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          onChange={(e) => handleChange(e)} value={post.description} name='description'
        />
       
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <IconButton color="primary" aria-label="upload picture" component="label">
    <input hidden accept="image/*" type="file" />
    <VideoCameraBack />
  </IconButton>
          <IconButton color="primary" aria-label="upload picture" component="label">
    <input hidden accept="image/png, image/jpeg" type="file" />
    <Image />
  </IconButton>
         
        
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
                     
       
       

        >
          <Button type="submit" >
          Update</Button>
         
        </ButtonGroup>
      </Box>
          
           
           
           
   
    );
  };
  
  export default UpdatePost;