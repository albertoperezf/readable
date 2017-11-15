import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { CommentList } from '../index';
import './styles.css';

export default class Post extends Component {
    static propTypes = {
        author: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        comments: PropTypes.array,
        deleted: PropTypes.bool,
        id: PropTypes.number,
        path: PropTypes.string,
        timestamp: PropTypes.string,
        title: PropTypes.string,
        voteScore: PropTypes.number,
    };

    static defaultProps = {
        author: '',
        body: '',
        category: '',
        comments: [],
        deleted: false,
        id: 0,
        path: '',
        timestamp: '',
        title: '',
        voteScore: 0
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const {
            author,
            body,
            category,
            comments,
            deleted,
            id,
            path,
            timestamp,
            title,
            voteScore
        } = this.props
        // const {  } = this.state
        return (
            <div>
                <p>
                    <a href={path}>
                        {title}
                    </a>
                </p>
                {
                    comments &&
                        <CommentList comments={comments} />
                }
            </div>
        )
    }
}
