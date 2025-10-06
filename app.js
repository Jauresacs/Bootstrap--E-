const express = require("express");
const cors = require("cors");
const Http = require('http');

/**
 * IMPORTATION DES MIDDLEWARES
 */
const removePoweredBy = require('./middleware/poweredByHeaderRemover.js').removePoweredBy;

const app = express();
const PORT = process.env.PORT || 3000;
const ADR_IPV4 = process.env.ADR_IPV4 || '127.0.0.1'

const allowedOrigins = [
    `http://localhost:${PORT}`,
    `http://${ADR_IPV4}:${PORT}/`
];

let corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: 'POST,GET,PUT,OPTIONS,DELETE',
    headers: ['Content-Type', 'Authorization']
};

app.use(removePoweredBy);
app.use((req, res, next) => {
    res.set('X-Content-Type-Options', 'nosniff');
    next();
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const server = Http.Server(app);

app.use(cors(corsOptions));

server.listen(PORT, ADR_IPV4,() => {
    console.log(`Server is running at http://${ADR_IPV4}:${PORT}`);
});

module.exports = server