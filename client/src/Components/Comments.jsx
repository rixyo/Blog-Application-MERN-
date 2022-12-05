import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled, Typography } from '@mui/material';
import { DataContext } from '../context/DataProvider';
import {API} from '../api/api'
import Comment from './Comment';
import {useNavigate}from 'react-router-dom'

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`;
const initialValue = {
   
    postId: '',
   
    comments: ''
}
const Comments = ({post}) => {
   
    
    const { user } = useContext(DataContext);
    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
   

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
               
            }
        }
        getData();
    }, [post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
          
            postId: post._id,
            comments: e.target.value
        });
    }
    const addComment=async(e)=>{
        await API.newComment(comment)
        setComment(initialValue)
       

    }
  return (
   <Box>
    <Container>
    <Image src={user?.image} alt="dp" />   
  
                <StyledTextArea 
                    rowsMin={2} 
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)} 
                    value={comment.comments}
                    
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    style={{ height: 40 }}
                    onClick={(e)=>addComment(e)}
                    
                >Comment</Button>
    </Container>
   <Box>
    {
        comments.comment && comments.comment.length>0 && comments.comment.map(comment=>(
            <Comment comment={comment} />

        ))
  
}
    </Box>
    

   </Box>
  )
}

export default Comments