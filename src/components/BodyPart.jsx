import React from "react";
import Icon from "../assets/icons/gym.png";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: " 270px",
        height: "280px",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "25px",
        gap: "47px,",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        variant
        fontSize="24px"
        fontWeight="bold"
        color="3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
