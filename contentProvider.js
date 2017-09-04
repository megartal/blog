"use strict"
var postCount = 0;

var Provider = function(){
    data : []; 
}

/**var data = {
    author  :"",
    title    :"", 
    body    :"", 
    createDate    :"", 
    comments    :[{
        isLiked :"",
        comment : "",
        createDate : ""
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

// test data
new Provider().data = [
    {
        author          :"Akbar",
        title           :"history", 
        body            :"readying history is awesome!", 
        createDate      : new Date(), 
        comments        :[{
            isLiked :true,
            comment : "good point",
            createDate : new Date()
        }]
    },
    {
        author          :"mohsen",
        title           :"politics", 
        body            :"readying politics is awesome!", 
        createDate      : new Date(), 
        comments        :[{
            isLiked :false,
            comment : "dis agree",
            createDate : new Date()
        }]
    },
    {
        author          :"hadi",
        title           :"sport", 
        body            :"readying sport is awesome!", 
        createDate      : new Date(), 
        comments        :[{
            isLiked :true,
            comment : "sometimes :)",
            createDate : new Date()
        }]
    }
];

exports.Provider = Provider;
    
