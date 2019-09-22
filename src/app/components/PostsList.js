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
        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} {...post} />;
        });
        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        );
    }

    componentDidMount() {
        const self = this;
        function getUsers() {
            return axios.get('http://jsonplaceholder.typicode.com/users');
        }

        function getPosts() {
            return axios.get('http://jsonplaceholder.typicode.com/posts');
        }

        axios.all([getUsers(), getPosts()])
            .then(axios.spread(function (usersPromise, postsPromise) {
                const authors = usersPromise.data;

                const posts = postsPromise.data;

                posts.forEach((post) => {
                    post.author = authors[post.userId - 1].username;
                });

                self.setState({posts: posts})
            }));
    }
}

export default PostsList;