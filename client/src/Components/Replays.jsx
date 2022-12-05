import   React,{useState,useEffect} from 'react';
import Popover from '@mui/material/Popover';
import Input from '@mui/joy/Input';
import { Box, TextareaAutosize, Button, styled, Typography } from '@mui/material';
import Replay from './Replay';
import {API} from "../api/api"
const StyledTextArea = styled(TextareaAutosize)`
    height: 30px !important;
    width: 100%; 
    margin: 0 20px;
`;
const initialValue = {
   
  commentId: '',
 
  replays: ''
}
const Replays = ({comment}) =>  {
  
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  ///

  const [replay, setReplay] = useState(initialValue);
  const [replays, setReplays] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const response = await API.getAllReplays(comment._id);
       
        if (response.isSuccess) {
            setReplays(response.data);
           
        }
    }
    getData();
}, [comment]);
const handleChange = (e) => {
  setReplay({
      ...replay,
    
      commentId: comment._id,
      replays: e.target.value
  });
}
const addReplay=async(e)=>{
  await API.newReplay(replay)
  setReplay(initialValue)
 

}
  
    return (
        <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
         Replay
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
            <Input placeholder="Replay"
             onChange={(e) => handleChange(e)} 
             value={replay.replays}
             />
            <Button
             onClick={(e)=>addReplay(e)}
            >replay</Button>
        </Popover>
        <Box>
    {
        replays && replays.length>0 && replays.map(replay=>(
            <Replay replay={replay} />

        ))
  
}
    </Box>
     
      </div>
      
    );
  };

export default Replays
  
