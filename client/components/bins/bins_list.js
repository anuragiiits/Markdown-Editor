import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import {Link} from 'react-router-dom';

class BinsList extends Component{

    onRemoveClicked(bin){
        Meteor.call('bins.remove',bin);
    }

    renderList(){
        return this.props.bins.map((bin) => {
            const url = `/bins/${bin._id}`
            return(
                <li className="list-group-item" key={bin._id}>
                   <Link to={url}> Bin {bin._id} </Link>
                    <span className="pull-right">
                        <button className="btn btn-danger" 
                            onClick={()=> this.onRemoveClicked(bin)}>
                        Delete
                        </button>
                    </span>
                </li>
            );
        });
    }
//another () => function is created in onclick because the functions 
//are created for each bins and if another function is not made, then 
//the remove function gets executed while it's rendered.

    render(){
        //console.log(this.props.bins);
        //console.log(Meteor.userId());
        if(Meteor.userId() == null){
            return(
                <h1 className="text text-primary text-center font-italic">Sign in to continue</h1>
            );
        }
        else{
            return(
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            );
        }
    };
}

export default withTracker(()=>{
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    return {bins: Bins.find({}).fetch()};
})( BinsList);