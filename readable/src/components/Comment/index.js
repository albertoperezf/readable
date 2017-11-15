import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './styles.css';

export default class Comment extends Component {
    static propTypes = {
        author: PropTypes.string,
        body: PropTypes.string,
        deleted: PropTypes.bool,
        id: PropTypes.number,
        parentDeleted: PropTypes.bool,
        parentId: PropTypes.number,
        timestamp: PropTypes.string,
        voteScore: PropTypes.number
    };

    static defaultProps = {
        author: '',
        body: '',
        deleted: false,
        id: 0,
        parentDeleted: false,
        parentId: 0,
        timestamp: '',
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
            deleted,
            id,
            parentDeleted,
            parentId,
            timestamp,
            voteScore
        } = this.props
        // const {  } = this.state
        return (
            <div>
                <p>
                    I'm a comment
                </p>
            </div>
        )
    }
}
