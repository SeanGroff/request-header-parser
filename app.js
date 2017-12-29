const express = require('express');

const app = express();
const PORT = process.env.PORT || 1337;

const formatIp = req => {
  if (req.headers['x-forwarded-for']) {
    return req.headers['x-forwarded-for'].split(',')[0];
  } else {
    return req.ip;
  }
};

const formatLang = lang => lang.split(',')[0];

const formatSoftware = software => software.split(')')[0].split('(')[1];

app.get('/', (req, res) => {
  res.redirect('/whoami');
});

app.get('/whoami', (req, res) => {
  res.json({
    ip: formatIp(req),
    language: formatLang(req.headers['accept-language']),
    software: formatSoftware(req.headers['user-agent']),
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
