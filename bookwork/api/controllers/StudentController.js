/**
 * StudentController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	
	// create: function(req, res, next){
	// 	var studentObj = {
	// 		school: req.param('school'),
	// 		year: req.param('year'),
	// 		major: req.param('major')
	// 	}

	// 	Student.create(studentObj, function studentCreated(err,student){
	// 		if(err){
	// 			console.log(err);
	// 			req.session.flash = {
	// 				err: err
	// 			}
	// 			return res.redirect('/student/')
	// 		}

	// 		student.save(function(err,student){
	// 			if(err) return next(err);

	// 			// res.redirect('/student/show/'+student.id);
	// 		});
	// 	});
	// },
	// show: function (req, res, next) {
	// 	Student.findOne(req.param('id'), function foundStudent (err, student) {
	// 		if (err) return next(err);
	// 		if (!student) return next();
	// 		res.view({
	// 			student: student,
	// 		});
	// 	});
	// },

	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to StudentController)
	 */
	_config: {}

	
};
