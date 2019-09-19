import React, {Component} from 'react';
import PostsList from '../components/PostsList';
// import Post from "../components/Post";

class Posts extends Component {
    render() {
        return (
            <div>
                {(!this.props.children) ?
                    (<PostsList/>)
                    :
                    (this.props.children)}
            </div>
        );
    }
}

export default Posts;