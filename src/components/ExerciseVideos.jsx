import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box
      sx={{
        marginTop: { lg: "100px", xs: "0px" },
      }}
    >
      <Typography
        variant
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
      >
        Watch{" "}
        <span style={{ color: "#d11212", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f2edee",
          borderRadius: "15px",
          padding: "20px",
          paddingBlock: "50px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Stack
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "30px", xs: "0px" } }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {exerciseVideos?.slice(0, 3)?.map((item, index) => (
            <a
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                margin: "0 15px",
              }}
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderRadius: "20px 20px 0px 0px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  variant
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#111111"
                >
                  {item.video.title}
                </Typography>
                <br />
                <Typography variant fontSize="14px" color="#111111">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ExerciseVideos;
