import React, {useState} from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import fileBase from 'react-file-base64'
import useStyles from './styles'
              
const Form = () =>{
    const classes = useStyles();  
    const [postData, setPostData] = useState({
        creator: '', title: '', message:'', tags:'',selectedFile:''
    })
    const handleSubmit = () =>{

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onsubmit={handleSubmit}>
                <Typography variant="h6"> Creating memory</Typography>
                <TextField name="cretor" variant="outlined" label="creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}></TextField>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, title: e.target.value})}></TextField>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, message: e.target.value})}></TextField>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, tags: e.target.value})}></TextField>                
            </form>
        </Paper>
    );
}

export default Form;