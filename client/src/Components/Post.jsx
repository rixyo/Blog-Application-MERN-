import { Link } from "@mui/material";
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
export default function Post({ post }) {
  console.log(post)
  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
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
        
          title={post.createdBy.knickName}
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

