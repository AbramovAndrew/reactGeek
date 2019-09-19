import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";

class Post extends Component {
    render() {
        const {id, userId, title, body} = this.props;

        console.log(this.props.authors);
        console.log(this.props.authors[2]);
        console.log(userId);

        return (
            <div className={'card border-secondary mb-3'}>
                <div className="card-header">
                    <Link to={`/posts/${id}`}>{this.props.authors[userId]}</Link>
                </div>
                <div className='card-body text-secondary'>
                    <p className='text-warning'>{title}</p>
                    <p>{body}</p>
                </div>
            </div>
        );
    }
}

export default Post;