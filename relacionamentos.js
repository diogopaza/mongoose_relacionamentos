var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.conectar = mongoose.connect('mongodb://localhost/testeRelacionamentos');

var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });
  
  var Story = mongoose.model('Story', storySchema);
  var Person = mongoose.model('Person', personSchema);

  var author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  });
  
  author.save(function (err) {
    if (err) return handleError(err);
  
    var story1 = new Story({
      title: 'Casino Royale',
      author: author._id    // assign the _id from the person
    });
  
    story1.save(function (err) {
      if (err) return handleError(err);
    });
});