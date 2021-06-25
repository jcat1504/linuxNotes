#!/bin/bash
apiKey='2bd32d99c4cd58ac9dd3e047759c6b8f'
defaultLocation="Anaheim"
dynamicUpdates=0
degreeCharacter="c"
data=0
lastUpdateTime=0

while [ $# -gt 0 ]
do
option="$1"
    case $option
    in
    -l) defaultLocation="$2"
    shift
    shift ;;
    -d) dynamicUpdates=1
    shift ;;
    -f) degreeCharacter="f"
    shift ;;
    esac
done


# dataPath: string var with path where we will keep our data, different for each location
# if else will check if file with data for chosen location exists. if created, data from file are being
# placed in data variable, otherwise file will be created with curl. download data and save to created
# file using redirection(>)
# lastUpdateTime: why 600? enforce first update after execute. 600 seconds = 10 mins. 
# in while loop: if dynamic updates are disabled, this loop will only work once, otherwise as long 
#as user wants
# lastfileupdate: keeps as unix timestamp last time when data file were 
# modified(by adding -r option and path as argument of option)
# 2 conditions: 
    # 1. checks if file was updated 10+ minutes ago(date +%s returns current time as timestamp)
    # if false, downloads data and save it to path 
    # 2. checks if app was updated 10 or more mins ago. if false, replaces value of lastUpdateTime with current time
    # clear - clears terminal screen before displaying new data
dataPath="/tmp/wth-$defaultLocation.json"
if [ ! -e "$dataPath" ];
then
    touch "$dataPath"
    data=$(curl "http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey")
    echo "$data" > "$dataPath"
else
    data=$(cat "$dataPath")
fi
lastUpdateTime=$(($(date +%s) -600))
while true
do
lastfileupdate=$(date -r "$dataPath +%s")
if [ $(($(date +%s)-lastfileupdate)) -ge 600 ];
then
data=$(curl -s "http://api.openweathermap.org/data/2.5/weather?q=$defaultLocation&units=metric&appid=$apiKey")
echo "$data" > "$dataPath"
fi
if [ $(($(date +%s)-lastUpdateTime)) -ge 600 ];
then
lastUpdateTime=$(date +%s)
clear

#echo $data|jq -r .name sends data to jq(by |) script to exact .name value(city name)
# echo -e '\033[0;30m\033[46m'$(echo $data | jq -r .name)'('$(echo $data | jq -r .coord.lon)','$(echo $data | jq -r .coord.lat)')''\033[40m\033[0m', $(echo $data | jq -r .sys.country)
"$(echo "$data" | jq -r .weather[].main)"
tempinc=$(echo "$data" | jq -r .main.temp)
tempcolour=97
if [ "$(echo "$tempinc < 0" | bc)" -eq 1 ];
then
tempcolour=94
elif [ "$(echo "$tempinc >=0 && $tempinc < 10" | bc)" -eq 1 ];
then
tempcolour=96
elif [ "$(echo "$tempinc >= 10 && $tempinc < 20" | bc)" -eq 1 ];
then
tempcolour=92
elif [ "$(echo "$tempinc >=20 && $tempinc < 30" | bc)" -eq 1 ];
then
tempcolour=93
else
tempcolour=91
fi
temperature=$tempinc
if  [ "$degreeCharacter" = "f" ] 
then
temperature=$(echo 32+1.8*"$tempinc" | bc)
fi
echo -e '\033[0;'$tempcolour'm' "$( $temperature)"\\033[0m °${degreeCharacter^^}
wind=$(echo "$data" | jq .wind.deg)
winddir=$((2193-(${wind%.*}+45)/90))
if [ $winddir -eq 2192 ];
then
winddir=2190
elif [ $winddir -eq 2190 ];
then
winddir=2192
else
:
fi
windkph=$(echo "$data" | jq .wind.speed)
windcolour=97
if [ "$(echo "$windkph >= 0 && $windkph < 10" | bc)" -eq 1 ];
then
windcolour=92
elif  [ "$(echo "$windkph >= 10 && $windkph < 20" | bc)" -eq 1 ];
then
windcolour=93
elif  [ "$(echo "$windkph >= 20 && $windkph <= 30" | bc)" -eq 1 ];
then
windcolour=32
else
windcolour=91
fi
echo -e \\u$winddir '\033[0;'$windcolour'm'"$windkph"\\033[0m km/h]
echo "$(echo "$data" | jq .main.pressure)" hPa
echo Humidity: "$(echo "$data" | jq .main.humidity)"%
echo Cloud coverage: "$(echo "$data" | jq .clouds.all)"%
fi
if [ $dynamicUpdates -eq 0 ];
then
break
fi
done

```
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  

const client = new twilio(accountSid, authToken);

client.messages.create({
    body: callWeather,
    to: '+19787264295', 
    from: '+14159431419' 
})
.then((message) => console.log(message.sid));
