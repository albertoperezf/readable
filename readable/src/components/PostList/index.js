import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
import Post from '../Post/index.js';
import './styles.css';

export default class PostList extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                I'm the post list
                <Post/>
            </div>
        )
    }
}