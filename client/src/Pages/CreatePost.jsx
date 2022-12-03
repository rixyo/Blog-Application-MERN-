import {
    Avatar,
    Button,
    ButtonGroup,Stack,
    styled,
    TextField,
    IconButton,Typography,
  } from "@mui/material";
  import React, { useState,useContext } from "react";
  import {Image,VideoCameraBack} from "@mui/icons-material";
  import { Box } from "@mui/system";
  import {API} from "../api/api"
  import {useNavigate}from 'react-router-dom'
  import { DataContext } from '../context/DataProvider';
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  
  const CreatePost = () => {

   
    const navigate = useNavigate();
   const [tags,setTags]=useState('')

   const [title,setTitle]=useState('')
   const [description,setdescription]=useState('')

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

   

 const { user } = useContext(DataContext);

    const handlePost=async(e)=>{
      e.preventDefault();
  
      if (!Image) return alert("Please upload your profile picture");
      const url = await uploadImage(Image);
      const newPost={
        title,
        tags,
        description,
        image:url,
        username: user,
      
        
      }
      
      
      await API.createPost(newPost)
      navigate('/')
     
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
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
             
              placeholder="#Tag"
              variant="standard"
              onChange={e=>setTags(e.target.value)}
            />
          
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={0}
              placeholder="Give a Title"
              variant="standard"
              onChange={e=>setTitle(e.target.value)}
            />
           
               <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
              onChange={e=>setdescription(e.target.value)}
            />
           
            <Stack direction="row" gap={1} mt={2} mb={3}>
            <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <VideoCameraBack />
      </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/png, image/jpeg" type="file" onChange={validateImg} />
        <Image />
      </IconButton>
             
            
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
                         
           
           

            >
              <Button type="submit">{upladingImg}
              Post</Button>
             
            </ButtonGroup>
          </Box>
         
   
    );
  };
  
  export default CreatePost;