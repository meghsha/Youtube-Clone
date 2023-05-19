import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/FetchData';


const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])
  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
      let fetchChannelData = async () => {
      let respChannel = await fetchFromApi(`channels?part=snippet&id=${id}`)
      setchannelDetail(respChannel?.items[0])
    }
    fetchChannelData();

    let fetchVideosData = async () => {
      let respVideos = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      setvideos(respVideos?.items)
    }
    fetchVideosData();
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(164,62,227,1) 26%, rgba(255,0,125,1) 100%)', zIndex: 10, height: '300px'}}
        />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>

      <Box display='flex' p='2' justifyContent='center' alignItems='center'>
          <Box sx={{ mr: {sm: '170px'}}} />
          <Videos videos={videos} />
      </Box>
      
    </Box>
  )
}
export default ChannelDetail