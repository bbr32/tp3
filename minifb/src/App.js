import React, { Component } from 'react';
import './App.css';
import Profile from "./components/Profile";
import Button from "./components/Button";
import Post from "./components/Post.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            tab : [
                ['Paul', 'Position', '03/10/1996','pp_ougo','Super post n°1', 3],
                ['Bacary', 'Konté', '13/04/1989','pp_rafafou','Doux post n°2', 2],
                ['Jean', 'Bon', '24/08/1994','pp_bbr', 'Post incroyable n°3', 5],
            ]
        };
    }



    onSubmit = (value) => {
        this.setState(() => ({
            index : value,
        }));
    };

    onSubmitLike = () => {
        this.state.tab[this.state.index][5] += 1;
    }

    render() {

        return (
            <div>
                <Button value={2} name={this.state.tab[2][0]} onSubmit={this.onSubmit}/>
                <Button value={1} name={this.state.tab[1][0]} onSubmit={this.onSubmit}/>
                <Button value={0} name={this.state.tab[0][0]} onSubmit={this.onSubmit}/>
                <Profile
                    firstname={this.state.tab[this.state.index][0]}
                    lastname={this.state.tab[this.state.index][1]}
                    birth={this.state.tab[this.state.index][2]}
                    pp={this.state.tab[this.state.index][3]}
                />
                <Post
                    lastpost={this.state.tab[this.state.index][4]}
                    like={this.state.tab[this.state.index][5]}
                    onSubmitLike={this.onSubmitLike}
                />
            </div>
        );
    }
}

export default App;
