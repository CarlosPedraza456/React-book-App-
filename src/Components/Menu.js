import React from 'react'
import Search from './Search.js';
import './Menu.css';
import PanelAdd from './PanelAdd.js';

class Menu extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {newItemPanel: false};
        //this.add = this.add.bind(this);
    }

    add = () => {
        this.setState({newItemPanel: true});
        console.log('ms');
    }

    onCancel = (e) => {
        //e.preventDefault();
        this.setState({newItemPanel: false});
    }

    render(){
        return(
            <div className="container">
    
                <div className="subcontainer">
    
                    <div className="logo">
                        <h1>{this.props.title}</h1>
                    </div>
    
                    <div className="search">
                        <Search onsearch={this.props.onsearch}></Search>
                    </div>
    
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue"> + Add new Book</button>
                    </div>
    
                </div>
                {
                    (this.state.newItemPanel)? 
                    <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd} ></PanelAdd>
                    :
                    ''
                }
                
            </div>
        );
    }
    

}

export default Menu;