const OAuth = require('oauth')
const yahooCfg = require('../config/yahoo.json')

const dateArrays = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

const returnDateTimeIso = (dateTime, unit) => {
  let dt = null
  let iso = null
  if (unit === 'seconds') dt = dateTime * 1000 // convert to milliseconds
  if (dt) iso = new Date(dt)
  if (iso) return iso
  return -1 // need to define this error on front end
}

const convertDatesToIso = (data) => {
  let modifData = data
  modifData.current_observation.pubDateTimeIso = returnDateTimeIso(modifData.current_observation.pubDate, 'seconds')
  modifData.forecasts.forEach(weekday => {
    weekday.dateTimeIso = returnDateTimeIso(weekday.date, 'seconds')
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
          returnData = convertDatesToIso(returnData)
          res.send(returnData)
        }
      })
    }
  })

  return router
}
