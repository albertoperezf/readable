import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Categories from '../Categories/index.js';
import './styles.css';

export default class CategoriesList extends Component {
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
                I'm the categories list
                <Categories/>
            </div>
        )
    }
}
