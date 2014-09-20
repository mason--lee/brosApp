/**
 * PlayersController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new': function(req, res) {
		//return new.ejs
		res.view();
	},

	create: function(req, res, next) {
		// Create a Player with the parameters sent from
		// the attendance form --> new.ejs
		Players.create(req.params.all(), function playerCreated(err, user) {

			// If there's an error
			if (err) {
				console.log(err);
			}

			// After successfully creating the player
			// redirect to the show action
			res.json(user);
		})
	}
};

