
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from './redux/action';
import {useEffect} from 'react';


function App() {
 const dispatch = useDispatch();
 const weather = useSelector(state => state.appReducer);
 console.log(weather);
  // useEffect(() => {
  //   dispatch(getWeather())
  // }, [])
  return (
    <>
    <div className="header">
    <h1>Covid Data</h1>
    <button onClick={()=> dispatch(getWeather())}>Get Data</button>
    </div>
    <div className="data-section">
    <p>Total cases: {weather.response.updated}</p>
    <p>Active cases: {weather.response.active}</p>
    <p>Death cases: {weather.response.deaths}</p>
    
    </div>
    </>
  );
}

export default App;
