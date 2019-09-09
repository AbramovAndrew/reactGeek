import React, {Component} from 'react';

import Post from './Post';

class Blog extends Component {
    render() {
        const posts = this.props.posts.map((post) => {
            return <Post key = {post.id} post = {post} />
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Blog;