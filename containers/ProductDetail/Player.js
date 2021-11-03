import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    setAudio(new Audio(url))
  // only run once on the first render on the client
  }, [])
  useEffect(() => {
      playing ? audio?.play() : audio?.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio?.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio?.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, audio];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      <audio src={url} controls autoPlay/>
    </div>
  );
};

export default Player;