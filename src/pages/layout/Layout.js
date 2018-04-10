import React, {Component} from 'react';


import Menu from "./Menu";



class Layout extends Component {


    render() {

        return (
            <div className="App">
                <Menu/>
                <div className="container-fluid">

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
