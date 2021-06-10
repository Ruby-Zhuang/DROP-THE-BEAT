import React, { useState } from 'react';

import './Game.scss';

import Lobby from "./Lobby/Lobby";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import TrackList from "./TrackList/TrackList";
import Result from "./Result/Result"; 


export default function Game({playlist}) {

  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);

  // Keep track of the number of rounds for a game based on the number of songs in the selected playlist
  const numberOfRounds = playlist ? playlist.songs.length : 0;
  console.log("Number of rounds", numberOfRounds);

  if (round > numberOfRounds) {
    setIsFinished(true);
  }

  return (
    <div className="game">
      <h1>I am a Game page</h1>

      {!isActive && <Lobby playlist={playlist} setIsActive={ setIsActive} />}

      {/* Might want to make a GameInProgress component that has all these 4 components */}
      {isActive && !isFinished && (
        <>
          <Chat />
          <Score setScore={setScore} setWinner={setWinner}/>
          <MusicPlayer playlist={playlist} round={round} setRound ={setRound}/>
          <TrackList setRound={setRound} isFinished={isFinished} songs={playlist.songs}/>
        </>
      )}

      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};