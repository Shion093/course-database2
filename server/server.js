const app = require('./config/express');

const port = 7777;

app.listen(port, () => console.info(`server started on port ${port}`));

module.exports = app;