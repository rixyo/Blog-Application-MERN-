import { Link } from "@mui/material";
import "./Post.css";
import {
    Avatar,
   
    CardActions,
  
    CardHeader,
    CardMedia,

    IconButton,
  
  } from "@mui/material"
 import { useState,useEffect } from "react";
  import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {API} from "../api/api"


export default function Post({ post }) {



  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
} 

const likePost=async()=>{
  const {data} =await API.likePost(post._id)
  console.log({data})


}

  
  return (
    <>
    <div className="post">
    <CardHeader
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src= {post.createdBy.image} />
              
         } action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        
          title={post.createdBy.username}
          subheader={post.createdAt} />
          <CardMedia className="postImg"
        component="img"

        image={post.image}
        alt="Paella dish"
         
      />
    
              <div className="postInfo">
                  <div className="postCats">
                      <span className="postCat">
                          
                             {post.tags}
                          
                      </span>
                      
                  </div>
                  <Link sx={{textDecoration:'none',color:'black'}} href={`details/${post._id}`}>
                  <span className="postTitle">
                      
                      {addEllipsis(post.title, 100)}

                     
                  </span>
                  </Link>
                  <hr />
                 
                  
              </div>
              <p className="postDesc">
              {addEllipsis(post.description, 100)}


              </p>
              <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=> likePost()}>
          <FavoriteIcon />
           {post.likeCount}
        </IconButton>
       
       
      </CardActions>
          </div>
          </>
  );
}

