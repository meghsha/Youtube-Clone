import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/FetchData";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      const response = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setVideos(response.items);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }} p={2}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        
        Search results for: <span style={{ color: "#F31503" }}> {searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;