const OAuth = require('oauth')
const yahooCfg = require('../config/yahoo.json')

module.exports = router => {
  router.get('/', (req, res) => {
    const header = {
      'X-Yahoo-App-Id': yahooCfg.appId
    }
    const request = new OAuth.OAuth(
      null,
      null,
      yahooCfg.clientId,
      yahooCfg.clientSecret,
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
    )
    request.get(
      'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
      null,
      null,
      function(err, data, result) {
        if (err) {
          console.log(err)
          res.send('Get req server err', err)
        } else {
          res.send(data)
        }
      }
    )
  })

  return router
}
