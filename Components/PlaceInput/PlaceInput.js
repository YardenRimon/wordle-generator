import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PlaceInput({ placesNames, answers, setAnswers }) {
  console.log("placesNames", placesNames);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(i);
      const newAnswers = [...answers];
      console.log(newAnswers);
      const i = newAnswers.findIndex((answer) => answer === "");
      newAnswers[i] = e.target.value;
      console.log(newAnswers);
      setAnswers(newAnswers);
      e.target.value = "";
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={placesNames}
      sx={{ width: "100%" }}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      renderInput={(params) => (
        <TextField {...params} label="איזה אתר ישראלי מופיע בתמונה?" />
      )}
    />
  );
}
