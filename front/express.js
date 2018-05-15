import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Component from './Component';

const app = express();

function home (req, res) {
  const msg = req.params.msg || 'Hello';
  res.send(ReactDOMServer.renderToString(<Component msg={msg} />));
}

app.get('/', home);
app.get('/:msg', home);

app.listen(3333);
