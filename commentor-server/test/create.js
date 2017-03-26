const clientFactory = require('aws-api-gateway-client')
const config = require('../config.json')

const client = clientFactory.newClient({
  region: config.region,
  invokeUrl: config.invokeUrl,
  apiKey: config.apiKey
})

client
  .invokeApi({}, '', 'POST', {}, {
    content: 'test centent',
    user: 'test user',
    uri: 'https://test-uri.com',
    date: (new Date).toISOString(),
  })
  .then((res) => {
    if (res.status === 200) {
      console.log('data added')
    } else {
      console.warn('error->', res.statusText)
    }
  })
  .catch((e) => {
    console.warn(e)
  })