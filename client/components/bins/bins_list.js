import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';

class BinsList extends Component{

    onRemoveClicked(bin){
        Meteor.call('bins.remove',bin);
    }

    renderList(){
        return this.props.bins.map((bin) => {
            return(
                <li className="list-group-item" key={bin._id}>
                    Bin {bin._id}
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
        return(
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    };
}

export default createContainer(()=>{
    Meteor.subscribe('bins');

    return {bins: Bins.find({}).fetch()};
}, BinsList);