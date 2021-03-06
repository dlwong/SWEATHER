const request = require('request');
const credentials = require('../credentials.js');

const getWind = (callback) => {

  const options = {
    url: `http://dataservice.accuweather.com/forecasts/v1/daily/1day/94107?apikey=${credentials.weather_api_password}&details=true`,
  };

  request.get(options,(error, response, body) => {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      const value = info.DailyForecasts[0].Day.Wind.Speed.Value;
      callback(value);
    }
  });
};

module.exports.getWind = getWind;

//getWind((value)=>console.log(value))