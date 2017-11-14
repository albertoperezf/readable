import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import './styles.css';

export default class Categories extends Component {
    static propTypes = {
        name: PropTypes.string,
        path: PropTypes.string
    };

    static defaultProps = {
        name: ''
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const { path, name } = this.props
        const {  } = this.state
        return (
            <div>
                <p>
                    <a href={path}>
                        {name}
                    </a>
                </p>
            </div>
        )
    }
}
