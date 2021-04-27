import {Container,Typography, Grow, Grid} from '@material-ui/core'
import Appbar from '@material-ui/core/AppBar'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

import memories from './images/img.webp'
import Posts from './components/posts/posts'
import Form from './components/form/form'

import useStyles from './styles'
import react, {useEffect} from 'react';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    
    return (
        <Container maxWidth='lg'>
            <Appbar className={classes.appBar} position='static' color='inherit'>
                <Typography className= {classes.heading} variant='h2' align='center'> Memories</Typography>
                <img className ={classes.image} src = {memories} alt = "memories" height="60"/>
            </Appbar>
            <Grow in>
                <Container>
                    <Grid container="space-between" alignItems="stretch" spacing ={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>        
    );
}

export default App;