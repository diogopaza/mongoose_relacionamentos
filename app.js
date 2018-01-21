var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;
exports.conectar = mongoose.connect('mongodb://localhost/relacionamentos');



const UserSchema = new Schema({
    
    _id : Schema.Types.ObjectId,
    name:  String,
    type:  String,
    email: String

})

//const AlunosSchema = new 

esquemaUser =  mongoose.model('User', UserSchema);

/*
novoUsusario = new esquemaUser({
    _id : new mongoose.Types.ObjectId(),
    name:"augusto",
    type:"teacher",
    email:"joao@diogo"
})

novoUsusario1 = new esquemaUser({
    _id : new mongoose.Types.ObjectId(),
    name:"olinda",
    type:"students",
    email:"olinda@diogo"
})

novoUsusario3 = new esquemaUser({
    _id : new mongoose.Types.ObjectId(),
    name:"bebeto",
    type:"students",
    email:"bbbb@uollll"
})

novoUsusario4 = new esquemaUser({
    _id : new mongoose.Types.ObjectId(),
    name:"barbosa",
    type:"students",
    email:"barbosa@barbosa"
})

novoUsusario.save(function(err, usuario){

    if(err) return console.error(err)
        console.log(usuario)
})

novoUsusario1.save(function(err, usuario){
    
        if(err) return console.error(err)
            console.log(usuario)
    })

    novoUsusario3.save(function(err, usuario){
        
            if(err) return console.error(err)
                console.log(usuario)
        })

        novoUsusario4.save(function(err, usuario){
            
                if(err) return console.error(err)
                    console.log(usuario)
            })






/*
   exports.esquemaUser.find(function(err,data){
        if(err) return console.log('Erro: ' + err);
        return console.log(data);
    });
 */
    exports.esquemaUserWeb = (req, res, next) => {
        esquemaUser
        .find({}, 'name')
        .then(data => {
            res.status(200).send({ data});
        }).catch(e => {
            res.status(400).send(e)
                                    
            
        })
    }
   
 

  users = [
    
    {"_id":("5a63453137a03425d853e392")},
    {"_id":("5a6348e5e55bba1308ba90b2")},
    {"_id":("5a6348e5e55bba1308ba90b3")}
    
    ]
    
    console.log(users);
  