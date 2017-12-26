import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component{
    render(){
        //console.log(this.props.match.params.binId);
        //console.log(this.props.bin);
        return(
            <div> 
                <BinsEditor bin={this.props.bin} />
            </div>
        );
    };
}

export default withTracker((props)=>{
    Meteor.subscribe('bins');
    const {binId} = props.match.params;

    return {bin: Bins.findOne(binId)}
})(BinsMain);