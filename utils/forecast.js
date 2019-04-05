const {darkSkyUrl, getOptions} = require('../config')
const request = require('request')

module.exports = (latitude, longitude, location, callback) => {
  request(getOptions(darkSkyUrl(latitude, longitude)), (error, {body}) => {
    if (error) callback('Unable to connect to weather service!', undefined)
    else {
      const {currently: {temperature, precipProbability}, daily: {data}} = body
      console.log(location)
      console.log(`${data[0].summary} It is currently ${temperature} degrees out. There is ${precipProbability}% chance of rain.`)
    }
  })
}

