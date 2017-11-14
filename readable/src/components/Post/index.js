import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './styles.css';

export default class Post extends Component {
    static propTypes = {
        author: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        deleted: PropTypes.bool,
        id: PropTypes.number,
        path: PropTypes.string,
        timestamp: PropTypes.string,
        title: PropTypes.string,
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
        const { author, body, category, deleted, id, path, timestamp, title, voteScore } = this.props
        const {  } = this.state
        return (
            <div>
                <p>
                    <a href={path}>
                        {title}
                    </a>
                </p>
            </div>
        )
    }
}
