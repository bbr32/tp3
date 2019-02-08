import React from 'react';
import pp_bbr from "../img/pp_bbr.png";
import pp_rafafou from "../img/pp_rafafou.png";
import pp_jps from "../img/pp_jps.jpeg";
import './Profile.css';
import './Button.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "",
            imageUrl: this.props.pp,
        }
    }

    randomHexColor = (e) => {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.setState({
            bgColor : color,
        });
    }

    render() {
        return(

            <div className={"profile-card"} style={{backgroundColor: this.state.bgColor}}>
                <img src={pp_jps} alt="PP Bbr" className={"profile-picture"}/>
                <p>
                    <b>Nom :</b> {this.props.firstname}
                </p>
                <p>
                    <b>Prénom : </b>{this.props.lastname}
                </p>
                <p>
                    <b>Date de naissance : </b>{this.props.birth}
                </p>

                <button onClick={this.randomHexColor} className={"style-btn"}>
                    Change style
                </button>
            </div>
        );
    }
}

export default Profile;