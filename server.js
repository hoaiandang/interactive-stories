/*
const express = require('express')
const next = require('next')
const dotenv = require('dotenv').config()
*/



import express from 'express';
import next from 'next';
//import dotenv from 'dotenv'; (needs to get called as early as possible)
import data from './data/data.js';
//Only to be used in the following method https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/


console.log('Hello Node.js project.');

console.log(process.env.MY_DATABASE_PASSWORD);

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  server.post('/api/witches', (req, res) => {
    if(!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'name is required'
      });
    } else if(!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
   const witch = {
     id: data.length + 1,
     name: req.body.name,
     description: req.body.description
   }
   data.push(witch);
   return res.status(201).send({
     success: 'true',
     message: 'witch added successfully',
     witch
   })
  });

  // get all witch data
  server.get('/api/witches', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'witches retrieved successfully',
      witches: data
    })
  });

  server.get('/api/witches/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    data.map((witch) => {
      if (witch.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'witch retrieved successfully',
          witch,
        });
      } 
  });
   return res.status(404).send({
     success: 'false',
     message: 'witch does not exist',
    });
  });

  server.delete('/api/witches/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    data.map((witch, index) => {
      if (witch.id === id) {
         data.splice(index, 1);
         //needs to decrement the id's of all of the witches that come after
         data.map((witch) => {
          if (witch.id > id) {
            witch.id -= 1;
          }
         })
         return res.status(200).send({
           success: 'true',
           message: 'Todo deleted successfuly',
         });
      }
    });


      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });

  });

  server.put('/api/witches/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let witchFound;
    let itemIndex;
    data.map((witch, index) => {
      if (witch.id === id) {
        witchFound = witch;
        itemIndex = index;
      }
    });

    if (!witchFound) {
      return res.status(404).send({
        success: 'false',
        message: 'witch not found',
      });
    }

    if (!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'name is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const updatedWitch = {
      id: witchFound.id,
      name: req.body.name || witchFound.name,
      description: req.body.description || witchFound.description,
    };

    data.splice(itemIndex, 1, updatedWitch);

    return res.status(201).send({
      success: 'true',
      message: 'witch added successfully',
      updatedWitch,
    });
  });

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = 3000;

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})