const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const { Sports } = require('./models/sport-model');
const morgan = require('morgan');

const app = express();

app.use( morgan(dev));


/* Your code goes here */
app.post('/sports/addSport/:sportId',  jsonParser, (req, res) => {
	let ip = req.params.sortId;
	let name = req.body.name;
	let np = req.body.num_players;
	let is = req.body.id;
	
	if( !name || !np || !is) {
		return res.status(406).message("Missing field in body");
	}
	
	if( ip != is) {
		return res.status(409).message("id sent in the parameters does not match the body id");
	}
	
	let newSport = {
		sportId : is,
		name : name,
		num_players : np
	}
	
	Sports
		addSport( newSport )
		.then( response => {
			return res.status(201).json( newSport );
		})
		.catch ( err  => {
			return res.message(err);
		});
	
});


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});