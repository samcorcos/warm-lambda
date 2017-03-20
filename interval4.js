let containerId

module.exports.ping = (event, context, callback) => {
  if (!containerId) containerId = context.awsRequestId

  console.log('*** CONTAINER ID *** ' + containerId)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: '4 minute intervals',
    }),
  })
}
