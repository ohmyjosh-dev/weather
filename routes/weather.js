const OAuth = require('oauth')
const yahooCfg = require('../config/yahoo.json')

module.exports = router => {
  router.post('/', (req, res) => {
    if (!req.body.city) {
      res.json({ success: false, message: 'No search parameters detected'})
    } else {
      const city = req.body.city
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
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json`,
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
    }
  })

  return router
}
