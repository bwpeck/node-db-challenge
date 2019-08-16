
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');
const tasksRouter = require('./tasks/tasksRouter');
const contextsRouter = require('./contexts/contextsRouter')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res, next) => {
    res.send('Server is up and running!');
});

server.use('/projects', projectsRouter);
server.use('/tasks', tasksRouter);
server.use('/resources', resourcesRouter);
server.use('/contexts', contextsRouter);

module.exports = server;