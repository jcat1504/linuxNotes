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

//RESPOND TO AN INCOMING TEXT MESSAGE
//how my thought process would be is... 
//1. to make sure this simple code works. so I will just send a simple text message from 
//current phone number to twilio number
//2. request current weather only in current location
//3. request current weather in current location OR anywhere else in the world 
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('Hello there!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});


var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("responseBody", jsonData.responseBody);
pm.environment.set("responseBody", responseBody);
console.log("the weather forecast:", responseBody)
