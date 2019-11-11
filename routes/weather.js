const OAuth = require('oauth')
const yahooCfg = require('../config/yahoo.json')

const dateArrays = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

const returnDateTimeObject = (dateTime, unit) => {
  let returnDtObj = null
  let dt = null
  if (unit === 'seconds') dt = dateTime * 1000 // convert to milliseconds
  const dateIso = new Date(dt)
  
  returnDtObj = {
    iso: dateIso,
    date: {
      year: 'year',
      month: 'month',
      day: 'day number'
    },
    time: {
      hour: 'hour',
      minute: 'minute',
      second: 'second'
    }
  }
  if (returnDtObj !== null) return returnDtObj
  return -1
}

const createDateTimeObjects = (data) => {
  let modifData = data
  modifData.current_observation.pubDateTimeObj = returnDateTimeObject(modifData.current_observation.pubDate, 'seconds')
  modifData.forecasts.forEach(weekday => {
    weekday.dateTimeObj = returnDateTimeObject(weekday.date, 'seconds')
  });
  return modifData
}

module.exports = router => {
  router.post('/', (req, res) => {
    if (!req.body.city) {
      res.json({ success: false, message: 'No search parameters detected' })
    } else {
      const city = req.body.city
      const header = {
        'X-Yahoo-App-Id': yahooCfg.appId
      }
      const request = new OAuth.OAuth(null, null, yahooCfg.clientId, yahooCfg.clientSecret, '1.0', null, 'HMAC-SHA1', null, header)
      request.get(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json`, null, null, function(
        err,
        data,
        result
      ) {
        if (err) {
          console.log(err)
          res.send('Get req server err', err)
        } else {
          let returnData = JSON.parse(data)
          returnData = createDateTimeObjects(returnData)
          console.log(returnData)
          res.send(returnData)
        }
      })
    }
  })

  return router
}
