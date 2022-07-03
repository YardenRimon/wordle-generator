import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PlaceInput({
  placesNames,
  answers,
  setAnswers,
  setGameOver,
  setPlayerWon,
  place,
}) {
  console.log("placesNames", placesNames);
  const handleKeyDown = (e) => {
    const newAnswer = e.target.value;
    if (e.key === "Enter") {
      const newAnswers = [...answers];
      const i = newAnswers.findIndex((answer) => answer === "");
      newAnswers[i] = newAnswer;
      setAnswers(newAnswers);
      setGameOver(i === -1 ? true : false);
      setPlayerWon(newAnswer === place.title ? true : false);
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
