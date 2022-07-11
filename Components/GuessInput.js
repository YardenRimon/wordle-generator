import { Box, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

import GuessButton from "./GuessButton";

export default function PlaceInput({
  placesNames,
  // answers,
  // setAnswers,
  setGameOver,
  setPlayerWon,
  place,
  setLastAnswer,
  places,
  lastAnswer,
  // newAnswer,
}) {
  const [input, setInput] = useState("");
  const guess = () => {
    const currentGuess = places.find((p) => p.title === input);
    setLastAnswer(currentGuess);
    console.log(lastAnswer);

    if (input === place.title) {
      setGameOver(true);
      setPlayerWon(true);
    }
    setInput("");
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%", marginInline: 1, marginBottom: 1 }}>
      <Grid
        container
        rowSpacing={0.8}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        sx={{
          height: "100%",
        }}
      >
        <Grid item xs={4.65} sx={{ width: "100%", height: "100%" }}>
          <GuessButton guess={guess} sx={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item xs={7.35}>
          <Autocomplete
            // blurOnSelect
            // autoSelect
            // autoHighlight
            autoComplete
            clearOnEscape
            noOptionsText="לא נמצאה אפשרות מתאימה"
            // openOnFocus={false} //לא עובד
            id="places-autocomplete"
            options={placesNames.sort()}
            sx={{
              width: "100%",
              height: "100%",
            }}
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                guess();
              }
            }}
            // value={input}
            onChange={(e, val) => {
              console.log("onChange", val, placesNames);
              if (placesNames.find((name) => name === val)) {
                setInput(val);
              }
            }}
            // onInputChange={(e, val) => {
            //   console.log("onInputChange");
            // const found = placesNames.find((placeName) => placeName === val);
            // if (found) {
            //   setInput(val);
            // }
            // }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="איזה אתר ישראלי מופיע בתמונה?"
                placeholder="הקלד/י שם של מקום בארץ"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
    // </div>
  );
}
