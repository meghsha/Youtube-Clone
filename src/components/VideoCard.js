import React from 'react'
import { Link } from 'react-router-dom'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl } from '../utils/constants';

const VideoCard = ({video : {id : {videoId}, snippet}}) => {

    return (
        <Card sx={{ width: {xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {xs: '100%', sm: '358px', md: '320px'}, height: 180}}
                />
            </Link>
            <CardContent 
                sx={{ backgroundColor: '#1e1e1e', height: '106px'}}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography fontWeight='bold' variant='subtitle1' color='#fff'>
                        {snippet.title.slice(0, 60) || 
                        demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography fontWeight='bold' variant='subtitle1' color='gray'>
                        {snippet.channelTitle || demoChannelTitle}
                        <CheckCircle style={{fontSize: '12px', color:'gray', marginLeft: '5px', paddingTop: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard