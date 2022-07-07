import Head from "next/head";
import { useEffect, useState } from "react";
import Answers from "../Components/Answers";
import Display from "../Components/Display";
import Header from "../Components/Header";
import PlaceInput from "../Components/PlaceInput";
import styles from "../styles/Home.module.css";
import getDistance from "geolib/es/getDistance";

const geolib = require("geolib");

export default function Home() {
  const [places, setPlaces] = useState(null);
  const [place, setPlace] = useState(null);
  const [placesNames, setPlaceNames] = useState([]);
  const [answers, setAnswers] = useState(["", "", "", "", "", ""]);
  const [gameOver, setGameOver] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  const [lastAnswer, setLastAnswer] = useState(null);
  console.log("gameOver", gameOver);
  console.log("playerWon", playerWon);

  useEffect(() => {
    function fetchPlace() {
      fetch("/api/place")
        .then((res) => res.json())
        .then(({ place, placesNames, places }) => {
          setPlaces(places);
          setPlace(place);
          setPlaceNames(placesNames);
        })
        // .then(console.log(place))
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPlace();
  }, []);

  // console.log(place);

  useEffect(() => {
    function newAnswer() {
      if (lastAnswer !== null) {
        console.log("newAnswer", lastAnswer.location);
        console.log("newAnswer", place.location);
        const distance = geolib.getDistance(
          lastAnswer.location,
          place.location
        );
        console.log("distance", distance);
        // const direction = geolib.getCompassDirection(
        //   lastAnswer.location,
        //   place.location
        // );
        const precents = (distance * 100) / 434;
        const newAnswers = [...answers];
        const i = newAnswers.findIndex((answer) => answer === "");
        if (0 < i < 5) {
          newAnswers[i] = {
            title: lastAnswer.title,
            distance: distance,
            // direction: direction,
            precents: precents,
          };
          setAnswers(newAnswers);
        } else if (i === -1) {
          setGameOver(true);
        }
      }
    }
    newAnswer();
  }, [lastAnswer]);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Isradle</title>
          <meta name="Know israel better" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {!!place ? (
          <Display place={place} playerWon={playerWon} gameOver={gameOver} />
        ) : (
          <p>Loading...</p>
        )}
        {!!place ? (
          <Answers answers={answers} place={place} playerWon={playerWon} />
        ) : (
          <p>Loading...</p>
        )}
        <main className={styles.input}>
          {!gameOver && placesNames.length && (
            <PlaceInput
              placesNames={placesNames}
              setAnswers={setAnswers}
              setLastAnswer={setLastAnswer}
              answers={answers}
              setPlayerWon={setPlayerWon}
              setGameOver={setGameOver}
              place={place}
              places={places}
              lastAnswer={lastAnswer}
              // newAnswer={newAnswer}
            />
          )}
        </main>
      </div>
      <footer className={styles.footer}>
        <div>Contact Us</div>
        <div>Created by wordle-generator</div>
      </footer>
    </>
  );
}
