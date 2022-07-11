import * as React from "react";
import Button from "@mui/material/Button";
import NotListedLocationRoundedIcon from "@mui/icons-material/NotListedLocationRounded";

export default function GuessButton({ guess }) {
  return (
    <Button
      sx={{ width: "100%", backgroundColor: "rgba(81,84,158, .8)" }}
      size="large"
      variant="contained"
      // fullWidth={true}
      onClick={guess}
      endIcon={<NotListedLocationRoundedIcon />}
    >
      בדוק תשובה
    </Button>
  );
}
