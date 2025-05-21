import { useState } from 'react';

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [started, setStarted] = useState(false);

  const startRadio = async () => {
    const audioUrl = '/stream.mp3'; // Substitua pela URL do seu stream real
    const newAudio = new Audio(audioUrl);
    newAudio.play();
    setAudio(newAudio);
    setStarted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30vh', fontFamily: 'Arial' }}>
      <h1>StreamWave</h1>
      {!started ? (
        <button 
          onClick={startRadio} 
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: '#fff'
          }}
        >
          Iniciar Rádio
        </button>
      ) : (
        <p>Rádio reproduzindo...</p>
      )}
    </div>
  );
}