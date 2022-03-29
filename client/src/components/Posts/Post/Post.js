import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, /*CircularProgress*/ } from '@material-ui/core';
import ThumpUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Card className={classes.card}>
            {/** there is an error when you create a post without a picture can be fixed by putting a loading bar
             * <>
            {post.selectedFile ? (
            <CardMedia className={classes.media} image={post.selectedFil e} title={post.title} />
            ):(
            <CircularProgress />
            )}
            </>
             */}
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.CreatedAt).fromNow()}</Typography>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize='medium' />
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color='textSecondary' component='p' >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <ThumpUpAltIcon fontSize='small' />
                    {'Like '}
                    {post.likes.length}
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                )}

            </CardActions>
        </Card>
    );
}

export default Post;