import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Blaze} from 'meteor/blaze';
import { Template } from 'meteor/templating';

//Blaze is a library that can render templates provided by meteor
class Account extends Component{

    componentDidMount(){
        //Render the blaze accounts form then find the div we
        //just rendered in the 'render' method and place the
        //blaze accounts form in that div 
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        //Go find the foem we created and destroy them
        //We have to clean up these form ourselves
        Blaze.remove(this.view);
    }

    render(){
        return(
            <div ref="container"></div>
        );
    };
};

export default Account;