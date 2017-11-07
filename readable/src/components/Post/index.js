import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './styles.css';

export default class Post extends Component {
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
                I'm a post
            </div>
        )
    }
}
