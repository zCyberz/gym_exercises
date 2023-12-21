import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box>
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }} />
    <Typography
      variant
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#d11212", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Box sx={{ position: "relative", width: "100%" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Box>
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }} />
    <Typography
      variant
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        marginLeft: "20px",
        marginTop: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Box sx={{ position: "relative", width: "100%" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Box>
  </Box>
);

export default SimilarExercises;
