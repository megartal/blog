"use strict"
var postCount = 0;

function Provider(){};

Provider.prototype.data = [];

/**var data = {
    author  :"",
    title    :"", 
    body    :"", 
    date    :"", 
    comments    :[{
        isLiked :"",
        comment : "",
        date : ""
    }]
}
*/

Provider.prototype.findAll = function(callback){
    callback(this.data);
};

Provider.prototype.findOne = function(id, callback){
    var result;
    if(id < postCount)
        result = data[id];
    callback(result);
};

Provider.prototype.SaveAll = function(posts, callback){
    if(typeof(posts)!==undefined){
        if(Array.isArray(posts)){
            Array.prototype.push(data, posts);
            postCount += posts.length;
        }else{
            data[data.length] = posts;
            postCount ++;
        }
        callback(posts);
    }
};

Provider.prototype.addComments = function(id, comnt, callback){
    if(id !== undefined && comnt !== undefined){
        this.findOne(id, function(result){
            result.comments[result.comments.length] = comnt;          
        });
    }
};

exports.Provider = Provider;
    
