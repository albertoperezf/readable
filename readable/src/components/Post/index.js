import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './styles.css';

export default class Post extends Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        voteScore: PropTypes.number,
        timestamp: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        deleted: PropTypes.boolean,
        path: PropTypes.string
    };

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const { path, title } = this.props
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
