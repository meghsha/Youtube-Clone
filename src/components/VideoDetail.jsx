import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"
import { fetchFromApi } from "../utils/FetchData"

const VideoDetail = ({videos}) => {

  const [videoDetail, setvideoDetail] = useState(null)
  const [relatedVideos, setrelatedVideos] = useState(null)
  const {id} = useParams()
  console.log(videoDetail);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      setvideoDetail(response.items[0])
    }

    let fetchRelatedData = async () => {
      let resp = await fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      setrelatedVideos(resp.items)
    }

    fetchRelatedData()
    fetchData();
  }, [id])

  if(!videoDetail?.snippet){
    return 'Loading...'
  }

  const {snippet: {title, channelId, channelTitle}, statistics: {likeCount, viewCount}} = videoDetail

  return (
    <Box minHeight='95vh'>
        <Stack  direction = {{ md: 'row', xs: 'column'}}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
              <Typography variant="h5" fontWeight='bold' color='#fff' p={2}>
                {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant="h5" style={{ color: '#fff'}}>
                    {channelTitle}
                    <CheckCircle sx={{ color: "gray", fontSize: "14px", marginLeft: '7px' }} />
                  </Typography>
                  
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography color='gray' variant="h6">
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                  <Typography color='gray' variant="h6">
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box alignItems='center' justifyContent='center' py={{ md: 1, sm: 5 }} px={2}>
              <Videos videos={relatedVideos} direction='column'/>
          </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetail