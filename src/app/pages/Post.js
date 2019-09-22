import React, {Component} from 'react';
import axios from 'axios';

import PostBody from '../components/Post';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    render() {
        return (
            <div>
                {this.state.post ? <PostBody {...this.state.post}/> : null}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                const post = response.data;
                this.setState({post: post});
            });
    }
}

export default Post;