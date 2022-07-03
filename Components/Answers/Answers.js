import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Answers({ answers }) {
  console.log("answers", answers);
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={3}>
        {answers.map((answer, index) => (
          <Item key={index} id={index}>
            {answer}
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
