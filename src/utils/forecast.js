const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4841c16e281391ad200e2320caa85c86&query='+ longitude + ',' + latitude +'&units=f';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current.weather_descriptions[0] + '. It is curently ' + body.current.temperature + ' degrees out. ' + 'It feels like ' + body.current.feelslike + ' degress out.');
            callback(error, body.current.weather_descriptions[0] + '. It is curently ' + body.current.temperature + ' degrees out. ' + 'It feels like ' + body.current.feelslike + ' degress out.');
        }
    })
}

// -75.7088, 44.1545


module.exports = forecast;