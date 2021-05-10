import React, {Component} from 'react';
import './Display.css';

class Display extends React.Component{
    render(){
        return(
            <div className='Display'>
                {this.props.Display}
            </div>
        )
    }
}

export default Display;