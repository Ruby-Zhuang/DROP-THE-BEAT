import React, { useState } from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";
import './GameInProgress.scss';
import MessageInput from '../Chat/MessageInput/index'

export default function GameInProgress({setScore, setWinner, playlist, nextRound, song, round, numberOfRounds, user, users, messages, sendMessage}) {

  // roundFinished state -> false
  const [roundStatus, setRoundStatus] = useState("not started");

  // set to true when audio is done in music player

  return (
    <div className='game-in-progress'>
      <div className='left-side'>
        {song && (
          <MusicPlayer roundStatus={roundStatus} playlist={playlist} song={song} nextRound={() => nextRound()} />
        )}
        <TrackList round={round} songs={playlist.songs} />
      </div>
      <div className='right-side'>
        <Score setScore={setScore} setWinner={setWinner} />
        <Chat {...{ user, users, messages }} />
        <MessageInput onSubmit={sendMessage} />
      </div>
    </div>
  );
}