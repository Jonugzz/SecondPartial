const mongoose = require( 'mongoose' );

/* Your code goes here */
const sportsCollectionSchema = mongoose.schema( {
	id : {
		type : Number,
		required : true
	},
	name : {
		type : String,
		required : true
	},
	num_players : {
		type : Number,
		required : true
	}	
});

const sportsCollection = mongoose.collectionSchema('sports', sportsCollectionSchema);

let Sports = {
	addSport function( newS ) => {
		.create( newS )
		.then( responseJson ) => {
			return responseJson;
		}
		.catch( err ) => {
			return err;
		}
		});
}

module.exports = { Sports };
    
};