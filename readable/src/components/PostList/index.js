import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Post } from '../index';
import './styles.css';

export default class PostList extends Component {
    static propTypes = {
        posts: PropTypes.array
    };

    static defaultProps = {
        posts: []
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const { posts } = this.props
        const {} = this.state
        console.log(posts)
        return (
            <div className='postList'>
                <h3>Post</h3>
                {posts.map((post) => (
                    <Post
                        author={post.author}
                        body={post.body}
                        category={post.category}
                        deleted={post.deleted}
                        id={post.id}
                        key={post.id}
                        path={post.path}
                        timestamp={post.timestamp}
                        title={post.title}
                        voteScore={post.voteScore}
                    />
                ))}
            </div>
        )
    }
}
