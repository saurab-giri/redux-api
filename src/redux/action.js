import axios from 'axios';


export const getWeather = () => async (dispatch) => {
    // var options = {
    //     method: 'GET',
    //     url: 'https://covid-19-data.p.rapidapi.com/country/code',
    //     params: {code: 'it'},
    //     headers: {
    //       'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    //       'x-rapidapi-key': '6f2b610ac0msh3987a4330d62690p16ef83jsne4511e20ef7d'
    //     }
    //   };
    try{
  dispatch({type:"WEATHER_FETCHING_ATTEMPT"})
  const {data} = await axios.get('https://corona.lmao.ninja/v2/all?yesterday=');
  dispatch({type:"WEATHER_FETCHING_SUCCESS", payload: data});
}
catch(error){
    dispatch({type:"WEATHER_FETCHING_ERROR", payload: error})
}
}