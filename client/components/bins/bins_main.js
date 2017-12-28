import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component{
    render(){
        //console.log(this.props.match.params.binId);
        //console.log(this.props.bin);
        if(!this.props.bin){
            return <div>Loading...</div>
        }
        return(
            <div> 
                <BinsEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        );
    };
}

export default withTracker((props)=>{
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    const {binId} = props.match.params;

    return {bin: Bins.findOne(binId)}
})(BinsMain);