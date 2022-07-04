import * as React from "react";
import Button from "@mui/material/Button";

export default function GuessButton({ guess }) {
  return (
    // <Stack spacing={2} direction="row">
    <Button variant="outlined" fullWidth={true} onClick={guess}>
      בדוק תשובה
    </Button>
    //  </Stack>
  );
}
