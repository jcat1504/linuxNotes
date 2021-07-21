const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const apiKey='2bd32d99c4cd58ac9dd3e047759c6b8f';
const request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'long beach';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

function callWeather() {
        request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
    let message = `It is ${weather.main.temp}% in (Lon: ${weather.coord.lon}, Lat: ${weather.coord.lat}) ${weather.name}.
                \n- Wind pressure: ${weather.main.pressure} hP
- Wind speed: ${weather.wind.speed}%
- Humidity: ${weather.main.humidity}%
- Cloud coverage: ${weather.clouds.all}%
\nLooks like ${weather.main.feels_like}% in terms of exact temp` ;
           console.log(message);
         client.messages.create({
    body: message,
    to: '+19787264295',
    from: '+14159431419'
})
.then((message) => console.log(message.body));
    }
        });
        }

client.messages.create({
  body: callWeather(),
   to: '+19787264295',
   from: '+14159431419'
 })
//.then((message) => console.log(message.sid));
