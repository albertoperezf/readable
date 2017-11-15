import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { CategoriesList, PostList } from '../index';
import './styles.css';

export default class Content extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        // const {} = this.props
        // const {} = this.state
        const categories = [
            {name: 'Venezuela', path: '#'},
            {name: 'España', path: '#'},
            {name: 'Brasil', path: '#'},
            {name: 'Francia', path: '#'},
            {name: 'Canada', path: '#'},
            {name: 'USA', path: '#'},
            {name: 'Colombia', path: '#'},
            {name: 'Alemania', path: '#'},
            {name: 'Portugal', path: '#'}
        ]

        const posts = [
            {id: 1, title: 'Post1', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 2, title: 'Post2', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 3, title: 'Post3', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 4, title: 'Post4', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 5, title: 'Post5', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 6, title: 'Post6', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 7, title: 'Post7', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 8, title: 'Post8', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 9, title: 'Post9', author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'},
            {id: 10, title: 'Post10',author: 'Pedro Perez', voteScore: 1, timestamp: '19/11/1992', body: '', category: 'Venezuela', deleted: false, path: '#'}
        ]

        const comments = [
            { id: 1, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 1, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 2, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 2, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 3, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 3, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 4, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 4, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 5, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 5, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 6, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 6, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 7, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 7, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 8, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 8, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 9, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 9, body: 'Some text here', voteScore: 1, parentDeleted: false },
            { id: 10, timestamp: '19/11/1992', author: 'Pedro Perez', deleted: false, parentId: 10, body: 'Some text here', voteScore: 1, parentDeleted: false }
        ]

        return (
            <div>
                <CategoriesList categories={categories} />
                <PostList posts={posts} />
            </div>
        )
    }
}
