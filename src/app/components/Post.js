import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from "axios";

class Post extends Component {
    render() {
        const {id, userId, title, body, author} = this.props;
        // console.log(id);
        // console.log(author);
        return (
            <div className={'card border-secondary mb-3'}>
                <div className="card-header">
                    <Link to={`/posts/${id}`}>{author}</Link>
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