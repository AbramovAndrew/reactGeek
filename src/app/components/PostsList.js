import React, {Component} from 'react';
import axios from 'axios';

import Post from './Post';

class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    render() {
        if (!this.state.posts.length) {
            return null;
        }

        let authors = [];
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                // console.log(response.data);
                response.data.forEach((user) => {
                    // authors[parseInt(user.id)] = user.username;
                    authors.push(user.username);
                });
                // authors = response.data.map((user) => {
                //     // authors[parseInt(user.id)] = user.username;
                //     return user.username;
                // });
            });
        // console.log(authors);
        // console.log(authors.length);
        // console.log(authors[2]);
        // console.log(userId);

        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} authors={authors} {...post} />;
        });
        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            });
    }
}

export default PostsList;