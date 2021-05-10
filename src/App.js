import React, {Component} from 'react';
import Button from './component/Button';
import Display from './component/Display';
import Keypad from './component/Keypad'
import './App.css'


class App extends React.Component {
    constructor(){
        super();
        this.state={data:''}
    }
    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
    
    render(){
        return(
            <div className='App'>
             <Display data={this.state.data} /> 
             <Keypad>
             <Button label="C" value="clear" />
                    <Button label="7" value="7" />
                    <Button label="4" value="4" />
                    <Button label="1" value="1" />
                    <Button label="0" value="0" />

                    <Button label="/" value="/" />
                    <Button label="8" value="8" />
                    <Button label="5" value="5" />
                    <Button label="2" value="2" />
                    <Button label="." value="." />

                    <Button label="x" value="*" />
                    <Button label="9" value="9" />
                    <Button label="6" value="6" />
                    <Button label="3" value="3" />
                    <Button label="" value="null" />

                    <Button label="-" value="-" />
                    <Button label="+" size="2" value="+" />
                    <Button label="=" size="2" value="equal" />
             </Keypad>           
            </div>
        );
        
    }
}

export default App;