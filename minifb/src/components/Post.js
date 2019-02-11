import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    handleClick(){
        this.props.onSubmitLike();
    }

    render() {
        return (
            <div className={"post-card"}>
                <h3>Last post</h3>
                <p> {this.props.lastpost}</p>
                <button onClick={() => this.handleClick()}>
                    Likes
                    <span> {this.props.like}</span>
                </button>
            </div>
        );
    }
}

export default Post;