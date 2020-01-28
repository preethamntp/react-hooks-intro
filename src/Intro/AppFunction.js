import React, { useState, useEffect } from 'react';


const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}


function App() {

  const [count, setCount] = useState(0);
  const [isOn, setLight] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(initialLocationState);
  let mounted = true;

  const toggleLight = () => {
    setLight(!isOn)
  }

  useEffect(
    () => {
      document.title = `You have clicked ${count} times`;
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('online', handelOnline);
      window.addEventListener('offline', handelOffline);
      navigator.geolocation.getCurrentPosition(handleGeoLocation);
      const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('online', handelOnline);
        window.removeEventListener('offline', handelOffline);
        navigator.geolocation.clearWatch(watchId);
        mounted = false;
      }
    }, [count]);


  const handleGeoLocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }


  const handelOnline = () => {
    setStatus(true)
  }

  const handelOffline = () => {
    setStatus(false)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  const incrementCount = (e) => {
    // setCount(prevCount => prevCount + 1)
    setCount(count + 1);

  }

  return (
    <>
      <h2>Counter</h2>
      <button onClick={(e) => incrementCount(e)}> I was Clicked {count} times </button>

      <h2>Toggle Light</h2>
      {/* <div style={{
        height: "50px",
        width: '50px',
        background: isOn ? "yellow" : "gray"
      }}
        onClick={toggleLight}
      >
      </div> */}

      <img style={{
        height: "50px",
        width: '50px',
      }}
        alt={isOn ? "Lights on" : "Lights off"}
        src={isOn ? "https://icon.now.sh/highlight/fd0" : "https://icon.now.sh/highlight/aaa"}
        onClick={toggleLight}
      />


      <h1>Mouse Position</h1>
      {/* <p>X Position:{x}</p>
      <p>X Position:{y}</p> */}
      {JSON.stringify(mousePosition, null, 2)}
      <br />

      <h2>Network Status</h2>
      <p>You are <strong> {status ? "Online" : 'Offline'} </strong></p>

      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      {/* <p>Speed is{location.speed}</p> */}
      <p>Your Speed is {speed ? speed : ' 0'}</p>
    </>
  );
}

export default App;
