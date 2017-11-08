import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import CategoriesList from '../CategoriesList/index.js';
import GoPlus from 'react-icons/lib/go/plus';
import PostList from '../PostList/index.js';
import './styles.css';

export default class Content extends Component {
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
                <div>
                    <Link to="/managePost">
                        <GoPlus/>
                    </Link>
                </div>
                <CategoriesList/>
                <PostList/>
            </div>
        )
    }
}
