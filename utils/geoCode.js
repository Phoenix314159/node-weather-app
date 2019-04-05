const {mapBoxUrlFunc, getOptions} = require('../config')
const request = require('request')

module.exports = (address, callback) => {
  const url = mapBoxUrlFunc(address)
  request(getOptions(url), (error, {body: {features}}) => {
    if (error) callback('unable to connect to location services', undefined)
    else if (features.length === 0) console.log('please provide a correct search term')
    else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name
      })
    }
  })
}
