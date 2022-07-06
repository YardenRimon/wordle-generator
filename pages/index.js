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
  const [place, setPlace] = useState(null);
  const [placesNames, setPlaceNames] = useState([]);
  const [answers, setAnswers] = useState(["", "", "", "", "", ""]);
  const [gameOver, setGameOver] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  console.log("gameOver", gameOver);
  console.log("playerWon", playerWon);

  useEffect(() => {
    function fetchPlace() {
      fetch("/api/place")
        .then((res) => res.json())
        .then(({ place, placesNames }) => {
          setPlace(place);
          setPlaceNames(placesNames);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPlace();
  }, []);

  return (
    // <div className={styles.body}>
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
              answers={answers}
              setPlayerWon={setPlayerWon}
              setGameOver={setGameOver}
              place={place}
              // setInput={setInput}
            />
          )}
        </main>
        {/* </div> */}
      </div>
      <footer className={styles.footer}>
        <div>Contact Us</div>
        <div>Created by wordle-generator</div>
      </footer>
    </>
  );
}
