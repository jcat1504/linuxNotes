// https://www.twilio.com/blog/get-your-local-weather-with-typescript-and-twilio-programmable-sms

//appConfig.ts
//this provides environment variables for use in application
/**
 * Global application-level configuration parameters.
 */
export const config = {
    weather: {
        api: {
            baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
            appId: process.env.WEATHER_API_APP_ID as string,
        }
    },
    twilio: {
        ACCOUNT_SID: process.env.ACCOUNT_SID as string,
        AUTH_TOKEN: process.env.AUTH_TOKEN as string,
        PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER as string
    }
} as const;

//appConfig.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/**
 * Global application-level configuration parameters.
 */
exports.config = {
    weather: {
        api: {
            baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
            appId: process.env.WEATHER_API_APP_ID,
        }
    },
    twilio: {
        ACCOUNT_SID: process.env.ACCOUNT_SID,
        AUTH_TOKEN: process.env.AUTH_TOKEN,
        PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER
    }
};

//conversions.ts 
// Temperature
export const celsiusToFahrenheit = (value: number) => ((value * (9/5)) + 32);
export const kelvinToCelsius = (value: number) => (value - 273.15);

// Speed
export const metersPerSecondToMilesPerHour = (value: number) => (value * 2.237);

//js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metersPerSecondToMilesPerHour = exports.kelvinToCelsius = exports.celsiusToFahrenheit = void 0;
const celsiusToFahrenheit = function (value) { 
        return ((value * (9 / 5)) + 32); 
     };

const kelvinToCelsius = function (value) { 
      return (value - 273.15); 
    };
// Speed
const metersPerSecondToMilesPerHour = function (value) { 
    return (value * 2.237); 
};

//You’ll also add a type called Immutable<T>, which will allow you to force any arguments 
//passed to methods to be readonly (recursively). That is, the object specified as the 
//generic T will be effectively deeply frozen at design time.

//Then, below all the existing code in getWeather.ts, add a new function called makeUrl:

function makeUrl(location: string, locationType: LocationType) {
    const BASE_URL = config.weather.api.baseUrl;
    const APP_ID = config.weather.api.appId;

    const partialUri = locationType === LocationType.ZIP
        ? `${BASE_URL}?zip=${location}`
        : `${BASE_URL}?q=${location}`
        
    // Full URL with query location and app ID.
    return `${partialUri}&appId=${APP_ID}`;
}

//js
function makeUrl(location, locationType) {
    var BASE_URL = config.weather.api.baseUrl;
    var APP_ID = config.weather.api.appId;
    var partialUri = locationType === LocationType.ZIP
        ? BASE_URL + "?zip=" + location
        : BASE_URL + "?q=" + location;
    // Full URL with query location and app ID.
    return partialUri + "&appId=" + APP_ID;
}

//getWeather.ts
import axios from 'axios';

import { config } from '../../config/appConfig';
import { parseWeatherDto } from './parseWeatherDto';

function makeUrl(location, locationType) {
    var BASE_URL = config.weather.api.baseUrl;
    var APP_ID = config.weather.api.appId;
    var partialUri = locationType === LocationType.ZIP
        ? BASE_URL + "?zip=" + location
        : BASE_URL + "?q=" + location;
    // Full URL with query location and app ID.
    return partialUri + "&appId=" + APP_ID;
}


//https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

//actual code for sending text via js
# actual code for sending text via js
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = new Twilio(accountSid, authToken);

let weather = JSON.parse(body);
let request = require('request');
let city = 'long beach';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

function callWeather() {
    let weather = JSON.parse(body)
#     let message = `It's ${weather.main.temp} degrees in
#                ${weather.name}!`;
# console.log(message);

        request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
    });
}

client.messages.create({
    body: callWeather(),
    to: '+19787264295',
    from: '+14159431419'
})
.then((message) => console.log(message.sid));
