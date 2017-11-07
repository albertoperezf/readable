import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
import CategoriesList from '../CategoriesList/index.js';
import PostList from '../PostList/index.js';
import './styles.css';

export default class Footer extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <CategoriesList/>
                <PostList/>
            </div>
        )
    }
}
