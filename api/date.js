module.exports = (req, res) => {
  const {body, query, cookies} = req

  res.json({
    body,
    query,
    cookies,
    env: process.env,
    time: new Date()
  })
}