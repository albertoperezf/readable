import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
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
                <div>
                    <Link
                        to="/managePost"
                    />
                </div>
                <CategoriesList/>
                <PostList/>
            </div>
        )
    }
}
