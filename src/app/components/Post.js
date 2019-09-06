import React, {Component} from 'react';

import '../styles/Post.css';

class Post extends Component {
    render() {
        const date = new Date(Date.parse(this.props.post.createDate)).toDateString();
        const post = (
            <div className={'post'}>
                <h2 className={'post-title'}>{this.props.post.title}</h2>
                <h3 className={'post-subtitle'}>{this.props.post.subtitle}</h3>
                <div className={'post-body'}>{this.props.post.postBody}</div>
                <span className={'post-signature'}>
                    <span className={'post-createDate'}>{date}</span> by <span className={'post-author'}>{this.props.post.author}</span>
                </span>
            </div>
        );

        return (
            <>
                {post}
            </>
        );
    }
}

export default Post;