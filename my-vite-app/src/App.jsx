import { useState } from 'react'
import './App.css'; 
import pumpkinImage from './images/fug-tong.jpg'; 
import defaultPigImage from './images/moodeng.jpg'; 
import watermelonImage from './images/tang-mo.jpg'; 
import grassImage from './images/yaa.jpg'; 
import realPigImage from './images/realpig.jfif'; 

const App = () => {
  const [level, setLevel] = useState(0);
  const [image, setImage] = useState(defaultPigImage); 
  const [size, setSize] = useState(250);

  const handleDrop = (event, foodValue) => {
    event.preventDefault();
    addLevel(foodValue);
  };

  const handleClick = (foodValue) => {
    addLevel(foodValue);
  };

  const addLevel = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);

   
    if (newLevel > 100) {
      setImage(realPigImage); 
    }
    setSize(250 + newLevel / 2); 
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#ffe4e1', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#ff69b4' }}>เกมส์เลี้ยงหมูเด้ง</h1>
      <h2 style={{ color: '#ff1493' }}>Level: {level}</h2>

      <div
        style={{
          border: '2px solid #ff69b4',
          backgroundColor: '#fff',
          width: '300px',
          height: '300px',
          margin: '20px auto',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onDrop={(event) => handleDrop(event, 0)} 
        onDragOver={handleDragOver}
      >
        <p style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translate(-50%, 0)', color: '#ff1493' }}>
          ลากอาหารมาที่นี่
        </p>
        <img src={image} alt="Pig" style={{ width: `${size}px`, height: 'auto', position: 'absolute' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <img 
            src={watermelonImage} 
            alt="แตงโม" 
            draggable 
            onDragEnd={(event) => handleDrop(event, 5)} 
            style={{ cursor: 'pointer', width: '250px', marginBottom: '5px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} 
          />
          <button onClick={() => handleClick(5)} style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>ให้แตงโม (+5)</button>
        </div>

        <div style={{ textAlign: 'center', margin: '10px' }}>
          <img 
            src={pumpkinImage} 
            alt="ฟักทอง" 
            draggable 
            onDragEnd={(event) => handleDrop(event, 10)} 
            style={{ cursor: 'pointer', width: '250px', marginBottom: '5px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} 
          />
          <button onClick={() => handleClick(10)} style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>ให้ฟักทอง (+10)</button>
        </div>

        <div style={{ textAlign: 'center', margin: '10px' }}>
          <img 
            src={grassImage} 
            alt="หญ้า" 
            draggable 
            onDragEnd={(event) => handleDrop(event, 20)} 
            style={{ cursor: 'pointer', width: '250px', marginBottom: '5px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} 
          />
          <button onClick={() => handleClick(20)} style={{ backgroundColor: '#ff69b4', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>ให้หญ้า (+20)</button>
        </div>
      </div>
    </div>
  );
};

export default App;