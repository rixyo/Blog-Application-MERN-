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
  import React, { useState } from "react";
  import {
   
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import { Box } from "@mui/system";
  
 
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  
  const Add = () => {
 
    return (
     
    
            
    
          <Box
            width={400}
            height={280}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
        sx={{marginLeft:{xl:70,sm:15,md:40}}}
           
        
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            />
          
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={0}
              placeholder="Give a Title"
              variant="standard"
            />
           
               <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
           
            <Stack direction="row" gap={1} mt={2} mb={3}>
            <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <VideoCameraBack />
      </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <Image />
      </IconButton>
             
            
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
                         
           
           

            >
              <Button>Post</Button>
             
            </ButtonGroup>
          </Box>
         
   
    );
  };
  
  export default Add;