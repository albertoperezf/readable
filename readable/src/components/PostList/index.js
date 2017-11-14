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
        return (
            <div className='postList'>
                {posts.map((post) => (
                    <Post
                        title={post.title}
                    />
                ))}
            </div>
        )
    }
}
