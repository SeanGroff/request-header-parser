const express = require('express');

const app = express();
const PORT = process.env.PORT || 1337;

const formatLang = lang => lang.split(',')[0];

const formatSoftware = software => software.split(')')[0].split('(')[1];

app.get('/', (req, res) => {
  res.redirect('/whoami');
});

app.get('/whoami', (req, res) => {
  res.json({
    ip: req.ip,
    language: formatLang(req.headers['accept-language']),
    software: formatSoftware(req.headers['user-agent']),
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
