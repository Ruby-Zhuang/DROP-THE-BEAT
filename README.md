# DROP THE BEAT

DROP THE BEAT is a fun & competitive live multiplayer “name that song” game. Two players can join a host's game room and guess the song titles in a selected playlist simultaneously by listening to short clips of the tunes.

While incorporating complex game logic behind the scenes, the design was strategically simple and clean to enhance the UX/UI.

This app was created as part of the final project for Lighthouse Labs (Web Development Bootcamp). The goal was to create a full-stack application from start to finish (including project planning and a 5 minute demo) in just two weeks.

Check out the 👉 [deployed website here!](https://drop-the-beat.netlify.app/) 👈

## Motivation

The motivation behind this app is two-fold. Firstly, simple online games (i.e. [Scribbl IO](https://skribbl.io/), [Among Us](https://store.steampowered.com/app/945360/Among_Us/), [Codenames](https://codenames.game/) and [Kahoot!](https://kahoot.com/)) have a way to bring people together through small moments of joy - which is much needed during these times. Secondly, we love music - music is the universal language! We combined these two ideas to create a fun game that any group of people can play together and jam to.

## Final Product

### Host Features

Host can select a playlist of songs for players to guess
![Host selects playlist](https://github.com/Ruby-Zhuang/DROP-THE-BEAT/blob/main/docs/host.gif?raw=true)

### Player Features

Players can enter the game lobby and change their name upon arrival
![Players enter game](https://github.com/Ruby-Zhuang/DROP-THE-BEAT/blob/main/docs/player.gif?raw=true)

Players can chat and guess the song title (short audio clip of songs plays each round)
![Winner](https://github.com/Ruby-Zhuang/DROP-THE-BEAT/blob/main/docs/winner.gif?raw=true)

## Functional Behaviour/Features

Host can:

- Select a playlist
- Invite players to guess the songs in that playlist just by listening to a short clip of the tunes
- Control the gameflow by clicking "next song" at any moment
- Cheer on players or give them hints in the live chat

Players can:

- Change their name upon arrival into the game lobby
- Compete with other players by typing the correct song title (case insensitive) in the live chat
- Get a point if they are the first to correctly guess the song

Game Features:

- Song details (title, artist, album photo) are revealed each round as soon as the title is guessed or when the time runs out (30 seconds default)
- Song details are available upon hover if they have been previously played
- Scoreboard updates dynamically upon a correct guess from a player
- When the playlist runs out of songs, the winner is calculated and revealed

## Tech Stack

- **Foundations**: PERN Stack
- **Client**: React, Axios
- **Server**: NodeJS, Express
- **Database**: PostgreSQL
- **Real-Time Communication**: Socket IO
- **Design/Styling**: Material UI, SASS
- **APIs**: Spotify API

## Setup

Install dependencies in both `server` and `client`:

```sh
npm install
```

## Running Server & Client

```sh
npm start
```

## Contributors

Ruby Zhuang: [@Ruby-Zhuang](https://github.com/Ruby-Zhuang/)

Nelli Butenko: [@NelliBtn](https://github.com/NelliBtn)

Dylan Du: [@dylangit01](https://github.com/dylangit01)
