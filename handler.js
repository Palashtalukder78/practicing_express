const handler = (req, res) => {
    console.log(req.app.get('view-engine'))
    res.send('This is the Home page')
}
module.exports = handler;