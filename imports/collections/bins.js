import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert':function(){   //use function keyword, not es6 syntax because in function keyword, this refers to 
                                //the called entity.. in case of es6, it binds the this keyword to this particular surrounding
       return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });

    },
    
    'bins.remove': function(bin){
        return Bins.remove(bin);
    },

    'bins.update': function(bin, content){
        return Bins.update(bin._id, {$set: {content}}); //
    }
});

export const Bins = new Mongo.Collection('bins');