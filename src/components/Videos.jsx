import React from 'react'
import {Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos, direction}) => {
    
    if(!videos){
      return 'Loading...'
    }

    // Use this one if the app breaks
    // if(!videos?.length){
    //   return 'Loading...'
    // }

    return (
      <Stack direction={ direction || "row" } flexWrap={'wrap'} gap={2} justifyContent={'start'}>
        {
          videos.map((item, idx) => {
            return <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          })
        }
      </Stack>
    )
}

export default Videos