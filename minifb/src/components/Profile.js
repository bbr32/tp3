import React from 'react';
import pp_bbr from "../img/pp_bbr.png";
import pp_rafafou from "../img/pp_rafafou.png";
import pp_ougo from "../img/pp_ougo.jpg";
import './Profile.css';
import './Button.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "",
        }
    }

    randomHexColor = () => {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.setState({
            bgColor : color,
        });
    }

    ppChoose() {
        switch(this.props.pp){
            case "pp_bbr":
                return pp_bbr;
                break;
            case "pp_ougo":
                return pp_ougo;
                break;
            case "pp_rafafou":
                return pp_rafafou;
                break;
        }
    }

    render() {
        return(
            <div className={"profile-card"} style={{backgroundColor: this.state.bgColor}}>
                <img src={this.ppChoose()} alt="PP Bbr" className={"profile-picture"}/>
                <p>
                    <b>Nom : </b> {this.props.firstname}
                </p>
                <p>
                    <b>Prénom : </b>{this.props.lastname}
                </p>
                <p>
                    <b>Date de naissance : </b>{this.props.birth}
                </p>

                <button onClick={this.randomHexColor}>
                    Change style
                </button>
            </div>
        );
    }
}

export default Profile;