const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a City Name -> ', answer => {
  geoCode(answer, (error, data) => {
    if(data) {
      const {latitude, longitude, location} = data
      forecast(latitude, longitude, location, (error, data) => {
        if (error) return console.log(error)
      })
    } else console.log('Unable to find location')
  })
  rl.close();
})

