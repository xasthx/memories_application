import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Post from './Post/Post.js';

import useStyles from './styles';

const Posts = () =>{
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return(
        !post.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) =>(
                    <Grid key={post.id} item e={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;