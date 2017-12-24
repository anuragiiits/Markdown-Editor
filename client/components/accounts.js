import React, {Component} from 'react';

//Blaze is a library that can render templates provided by meteor
class Accounts extends Component{

    componentDidMount(){
        //Render the blaze accounts form then find the div we
        //just rendered in the 'render' method and place the
        //blaze accounts form in that div 
    }

    componentWillUnmount(){
        //Go find the foem we created and destroy them
        //We have to clean up these form ourselves
    }

    render(){
        return(
            <div></div>
        );
    };
};