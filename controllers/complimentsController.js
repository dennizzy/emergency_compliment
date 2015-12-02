var Compliment = require("../models/compliment");
var complimentsController = {
  index: function(req, res){
    res.render('compliments/index.hbs', {
      compliments: Compliment.all()
    });
  },
  show: function(req, res){
    res.render('compliments/show.hbs',{
      compliment: Compliment.find([req.params.id])
    });
  },
  new: function(req, res){
    res.render('compliments/new.hbs');
  },
  create: function(req, res){
    // use model to create compliment
    var compliment = Compliment.create(req.body.compliment)
    // redirect to compliment
    res.redirect("/compliments")
  };
  // edit action goes here...
  edit: function(req, res){
    res.render('compliments/edit.hbs')
  };

 // update action code goes here...
 put: function(req, res){
   // here's an update
   var compliment = Compliment.update(req.body.compliment)
   res.redirect("/compliments")
 };
}

module.exports = complimentsController;
