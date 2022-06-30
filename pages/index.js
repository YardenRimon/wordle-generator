import Head from "next/head";
import { useEffect, useState } from "react";
import Answers from "../Components/Answers/Answers";
import Display from "../Components/Display/Display";
import GuessButton from "../Components/GuessButton/GuessButton";
import Header from "../Components/Header/Header";
import PlaceInput from "../Components/PlaceInput/PlaceInput";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [place, setPlace] = useState(null);
  const [placesNames, setPlaceNames] = useState([]);
  const [answers, setAnswers] = useState(["", "", "", "", "", ""]);
  // const [unswer2, setanswer2]=useState("")
  // const [unswer3, setanswer3]=useState("")
  // const [unswer4, setanswer4]=useState("")
  // const [unswer5, setanswer5]=useState("")
  // const [unswer6, setanswer6]=useState("")

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
    <div className={styles.container}>
      <Head>
        <title>Isradle</title>
        <meta
          name="Know israel better"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        {!!place ? <Display place={place} /> : <p>Loading Riddle...</p>}
        <Answers answers={answers} />
        {placesNames.length && (
          <PlaceInput
            placesNames={placesNames}
            setAnswers={setAnswers}
            answers={answers}
          />
        )}
        <GuessButton />
      </main>

      <footer className={styles.footer}>
        <div>Contact Us</div>
        <div>Created by wordle-generator</div>
      </footer>
    </div>
  );
}
