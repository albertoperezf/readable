import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { CategoriesList, GoPlus, PostList } from '../index';
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
                    <Link to="/managePost" className='contentLink'>
                        <GoPlus/> Add Post
                    </Link>
                </div>
                <CategoriesList/>
                <PostList/>
            </div>
        )
    }
}
