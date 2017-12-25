import React from 'react';
import Header from './header';

export default (props) =>{
    //console.log(props);
    
    return(
            <div>
                <Header history={props.history}/>
                
            </div>
    );
};