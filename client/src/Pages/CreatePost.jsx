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
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const [title,setTitle]=useState('')
    const [tags,setTags]=useState('')
    const [description,setDescription]=useState('')

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
    const handlePost=async(e)=>{
      e.preventDefault();
      if (!image) return alert("Please upload your profile picture");
        const url = await uploadImage(image);
        console.log(url)
         await API.createPost({title,description,tags,image:url})
        
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
                src="https://res.cloudinary.com/dezhi6orz/image/upload/v1669388201/USER_PROFILE/IMG_20220626_170807_Bokeh_2_sx4pdn.jpg"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                Roixy
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
             
              placeholder="#Tag"
              variant="standard"
              onChange={(e)=>setTags(e.target.value)} value={tags}
            />
          
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={0}
              placeholder="Give a Title"
              variant="standard"
              onChange={(e)=>setTitle(e.target.value)} value={title}
            />
           
               <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
              onChange={(e)=>setDescription(e.target.value)} value={description}
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
              <Button type="submit" >{upladingImg}
              Post</Button>
             
            </ButtonGroup>
          </Box>
         
   
    );
  };
  
  export default CreatePost;