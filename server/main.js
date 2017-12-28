import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup
  
  Meteor.publish('bins',function(){
    //if(this.userId == null) {return; } removing this line will add a feature of using app anonymously
    return Bins.find({ownerId: this.userId});
  });

  Meteor.publish('sharedBins', function(){
    const user = Meteor.users.findOne(this.userId);
    //console.log(this.userId);
    if(!user) { return; }

    const email = user.emails[0].address;

    return Bins.find(
      { sharedWith: {$elemMatch : {$eq: email}}}
    );
  })
});
