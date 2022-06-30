import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PlaceInput({ placesNames, answers, setAnswers }) {
  console.log("placesNames", placesNames);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      // setAnswers(e.target.value)
      console.log(e.target.value);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={placesNames}
      sx={{ width: "100%" }}
      onKeyDown={handleKeyDown}
      onChange={(e, v) => setAnswers(v)}
      renderInput={(params) => <TextField {...params} label="אתר בישראל" />}
    />
  );
}
