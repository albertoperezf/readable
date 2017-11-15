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

    static defaultProps = {};

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
        const {  } = this.state
        return (
            <div>
                <p>
                    I'm a comment
                </p>
            </div>
        )
    }
}
