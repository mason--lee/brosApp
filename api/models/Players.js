/**
* Players.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,
	
	attributes: {
		name: {
			type: 'string',
			required: true
		},
		attendance: {
			type: 'string',
			required: true
		},
		backNumber: {
			type: 'integer',
			unique: true
		},
		position: {
			type: 'integer'
		}
	}
};

