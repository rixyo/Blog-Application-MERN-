import React,{useState,useEffect} from 'react'
import { Grid,Link,Box } from '@mui/material'
import Post from './Post'
import "./Posts.css"
import {API} from '../api/api'
const Posts = () => {
  const [posts,getPosts]=useState([])
  useEffect(() => {
    const fetchData = async () => { 
        let response = await API.getAllPosts();
        
            getPosts(response.data);
        
    }
    fetchData();
}, []);
  return (
    
     <div className='posts'>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12} key={post._id}>
                        
                            <Post  post={post} />
                        
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available
                    </Box>
            }
        </div>


  )
}

export default Posts