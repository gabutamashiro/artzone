module.exports = function ({ app, dbConn, upload }) {
  app.get('/search/alga', (req, res) => {
    res.status(200).jsonp(req);
  });
}