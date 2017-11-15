import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Comment } from '../index';
import './styles.css';

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    static defaultProps = {
        comments: []
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const { comments } = this.props
        // const {  } = this.state
        return (
            <div>
                <Comment />
            </div>
        )
    }
}
