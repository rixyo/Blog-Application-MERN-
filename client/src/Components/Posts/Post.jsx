import { Link } from "react-router-dom";
import "./Post.css";
import {
    Avatar,
   
    CardActions,
  
    CardHeader,
    CardMedia,

    IconButton,
  
  } from "@mui/material"
 
  import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post() {
  return (
    <>
    <div className="post">
    <CardHeader
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src="https://res.cloudinary.com/dezhi6orz/image/upload/v1669388201/USER_PROFILE/IMG_20220626_170807_Bokeh_2_sx4pdn.jpg" />
              
         } action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        
          title="Roixy"
          subheader="September 14, 2022" />
          <CardMedia className="postImg"
        component="img"

        image="https://www.bleepstatic.com/content/hl-images/2020/08/04/nodejs-header.jpg"
        alt="Paella dish"
         
      />
              <div className="postInfo">
                  <div className="postCats">
                      <span className="postCat">
                          <Link className="link" to="/posts?cat=Music">
                              #Node
                          </Link>
                      </span>
                      <span className="postCat">
                          <Link className="link" to="/posts?cat=Music">
                              #Express
                          </Link>
                      </span>
                  </div>
                  <span className="postTitle">
                      <Link to="/post/abc" className="link">
                    
Fast, unopinionated, minimalist web framework for Node.js
                      </Link>
                  </span>
                  <hr />
                 
                  
              </div>
              <p className="postDesc">
              Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


              </p>
              <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
          </div>
          </>
  );
}

