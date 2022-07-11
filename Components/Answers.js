import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Answer from "./Answer";
import { Grid } from "@mui/material";

export default function Answers({ answers }) {
  console.log("answers", answers);

  return (
    <Box sx={{ flexGrow: 1, height: "30%", width: "100%", margin: "1%" }}>
      <Grid
        container
        rowSpacing={0.8}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        sx={{
          height: "100%",
          "& .MuiPaper-root": {
            height: "100%",
            backgroundColor: "rgba(92, 94, 90, 0.8)",
          },
        }}
      >
        {answers.map((answer, index) => (
          <Answer key={index} answer={answer} className={styles.answer} />
        ))}
      </Grid>
    </Box>
  );
}
