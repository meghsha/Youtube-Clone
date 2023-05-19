import { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material'
import { fetchFromApi } from '../utils/FetchData';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {

    const [selectedCategory, setselectedCategory] = useState('New');
    const [videos, setVideos] = useState([])

    useEffect( () => {
        let fetchData = async () => {
        const response = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        setVideos(response.items);
    }
    fetchData();

    }, [selectedCategory])
    
    return (
        <Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
            <Box 
                sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}
            >
                <Sidebar 
                    selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}
                />
                <Typography className="copyright" variant='body2' 
                    sx={{mt: 1.5, color: '#fff'}}
                >
                    Copyright 2023 MEG Media
                </Typography>
            </Box>

            <Box 
                sx={{ overflowY: 'auto', height: '90vh', flex: 2}}
                p={2}
            >
                <Typography 
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ color: 'white'}}
                >
                    {selectedCategory}
                    <span style={{ color: '#F31503'}}
                    > Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed