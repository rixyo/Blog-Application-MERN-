import { useContext } from "react";

import { Typography, Box, styled, CardHeader,Avatar, IconButton } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../api/api';
import { DataContext } from "../context/DataProvider";
import Replays from "./Replays";
const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Replay = ({ replay}) => {
   

    const { user } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteReplay(replay._id);
      
       
    }

    return (
        <Component>
            <Container>
            <CardHeader
          avatar={<Avatar sx={{ bgcolor: "white" }} aria-label="recipe"
          src= {replay.replayBy.image} />
              
         } 
          title={replay.replayBy.username}
          subheader={new Date(replay.createdAt).toDateString()} />
          
                { replay.replayBy._id === user.id &&
                <IconButton>
                     <DeleteIcon onClick={() => removeComment()} /> 

                </IconButton>
}
            </Container>
            <Typography variant="body1" sx={{marginLeft:10,marginTop:0}}>{replay.replays}</Typography>
           
         
        </Component>
        
    )
}
export default Replay