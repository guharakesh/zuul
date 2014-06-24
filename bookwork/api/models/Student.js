/**
 * Student
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		
		school:{
			type     : 'string',
			required : true
		},
		year:{
			type     : 'string',
			required : true
		},
		major:{
			type     :'string',
			required : true
		}
	}
};
