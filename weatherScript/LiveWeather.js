const apiKey='xxxxxxxxxxxxxx'
var defaultLocation="Anaheim"
var dynamicUpdates=0
var degreeCharacter="c"
var data=0
var lastUpdateTime=0

// while [ $# -gt 0 ]
// do
// option="$1"
//     case $option
//     in
//     -l) defaultLocation="$2"
//     shift
//     shift ;;
//     -d) dynamicUpdates=1
//     shift ;;
//     -f) degreeCharacter="f"
//     shift ;;
//     esac
// done

function callWeather() {
    do {
        var option = arg1;
        switch(option)
        {
            case option: 
            let defaultLocation = arg2;
            break;

            let dynamicUpdates = 1
            break;

            let degreeCharacter="f"
            break;

        } 
    } while(args>=0);

    const dataPath="/tmp/wth-$defaultLocation.json";
    if (!dataPath) {
        //touch datapath
        const data=("http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey");
        //echo data || dataPath
        else {
            let data=dataPath
        else if {
            let lastUpdateTime=(("date +%s")-600)
        }
        while(true){
            let lastfileupdate=(date -r "datapath +%s")
        }
        if((date +%s)-lastfileupdate) -ge 600) {
            data=("http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey");
            //echo data || dataPath
        }
        if((date +%s) -lastUpdateTime) -ge 600) {
            lastUpdateTime=(date +%s)
        }
        break
        }
    }
}
// dataPath="/tmp/wth-$defaultLocation.json"
// if [ ! -e "$dataPath" ];
// then
//     touch "$dataPath"
//     data=$(curl "http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey")
//     echo "$data" > "$dataPath"
// else
//     data=$(cat "$dataPath")
// fi
// lastUpdateTime=$(($(date +%s) -600))
// while true
// do
// lastfileupdate=$(date -r "$dataPath +%s")
// if [ $(($(date +%s)-lastfileupdate)) -ge 600 ];
// then
// data=$(curl -s "http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey")
// echo "$data" > "$dataPath"
// fi
// if [ $(($(date +%s)-lastUpdateTime)) -ge 600 ];
// then
// lastUpdateTime=$(date +%s)
// clear

//actual code
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = new Twilio(accountSid, authToken);

let request = require('request');
let city = 'long beach';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

function callWeather() {
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
