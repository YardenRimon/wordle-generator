import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";

export default function PlaceInput({
  placesNames,
  answers,
  setAnswers,
  setGameOver,
  setPlayerWon,
  place,
  // setInput,
}) {
  const [input, setInput] = useState("");
  // const [input, setInput] = useState("");
  // console.log("placesNames", placesNames);
  const handleKeyDown = (e) => {
    const newAnswer = e.target.value;
    if (e.key === "Enter") {
      const newAnswers = [...answers];
      const i = newAnswers.findIndex((answer) => answer === "");
      if (0 < i < 5) {
        newAnswers[i] = newAnswer;
      } else if (i === -1) {
        setGameOver(true);
      }
      setAnswers(newAnswers);
      if (newAnswer === place.title) {
        setGameOver(true);
        setPlayerWon(true);
      }
      // (p,c) => { return c }
      // setGameOver((prevState) => {
      //   return;
      // });
      // setGameOver(i === -1 ? true : false);
      // setInput(newAnswer);
      // useRef

      // setInput("");
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
      onChange={(e) => setInput(e.target.value)}
      renderInput={(params) => (
        <TextField
          {...params}
          // autoFocus="true"
          // placeHolder=""
          label="איזה אתר ישראלי מופיע בתמונה?"
          defaultValue={input}
        />
      )}
    />
  );
}
