import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Answer({ answer }) {
  return (
    <>
      <Grid item xs={2}>
        <Item>{answer.precents}</Item>
      </Grid>
      <Grid item xs={2.5}>
        <Item>{answer.direction}</Item>
      </Grid>
      <Grid item xs={3.2}>
        <Item>{answer.distance}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{answer.title}</Item>
      </Grid>
    </>
  );
}
