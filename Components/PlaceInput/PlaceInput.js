import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import GuessButton from "../GuessButton/GuessButton";

export default function PlaceInput({
  placesNames,
  answers,
  setAnswers,
  setGameOver,
  setPlayerWon,
  place,
}) {
  const [input, setInput] = useState("");
  const guess = () => {
    // console.log("input", input);
    // const newAnswer = e.target.value;
    // if (e.key === "Enter") {
    const newAnswers = [...answers];
    const i = newAnswers.findIndex((answer) => answer === "");
    if (0 < i < 5) {
      newAnswers[i] = input;
    } else if (i === -1) {
      setGameOver(true);
    }
    setAnswers(newAnswers);
    if (input === place.title) {
      setGameOver(true);
      setPlayerWon(true);
    }
    setInput("");
    // (p,c) => { return c }
    // setGameOver((prevState) => {
    //   return;
    // });
    // setGameOver(i === -1 ? true : false);
    // setInput(newAnswer);
    // useRef

    // setInput("");
    // }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={placesNames}
        sx={{ width: "100%" }}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            guess();
          }
        }}
        value={input}
        onChange={(e, val) => {
          // console.log("autocomplete", val);
          setInput(val);
          // console.log(input);
        }}
        onInputChange={(e, val) => {
          console.log("onInputChange", val);
          const found = placesNames.find((placeName) => placeName === val);
          if (found) {
            setInput(val);
          }
          // console.log(input);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            // autoFocus="true"
            // placeHolder=""
            label="איזה אתר ישראלי מופיע בתמונה?"
            // defaultValue={input}
            // onChange={(e) => {
            //   setInput(e.target.value);
            //   // console.log(input);
            // }}
          />
        )}
      />
      <GuessButton guess={guess} />
    </>
  );
}
