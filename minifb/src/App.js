import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile";
import Button from "./components/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : 0
        };
    }

    tab = [
            ['Paul', 'Position', '03/10/1996','pp_jps'],
            ['Bacary', 'Konté', '13/04/1989','pp_rafafou'],
            ['Jean', 'Bon', '24/08/1994','pp_bbr'],
        ];

    onSubmit(value){
        //this.setState({value});
    }

    render() {

        return (
            <div>
                <Button value={2} name={this.tab[2][0]} onSubmit={this.onSubmit}/>
                <Button value={1} name={this.tab[1][0]} onSubmit={this.onSubmit}/>
                <Button value={0} name={this.tab[0][0]} onSubmit={this.onSubmit}/>
                <Profile firstname={this.tab[this.state.index][0]} lastname={this.tab[this.state.index][1]} birth={this.tab[this.state.index][2]} pp={this.tab[this.state.index][3]}/>
            </div>
        );
  }
}

export default App;
