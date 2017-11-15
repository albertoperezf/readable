import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import api from '../../utils/api'
import { Categories } from '../index';
import './styles.css';

export default class CategoriesList extends Component {
    static propTypes = {
        categories: PropTypes.array
    };

    static defaultProps = {
        categories: []
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const { categories } = this.props
        // const { } = this.state
        return (
            <div className='categoryListContainer'>
                <h3>Categories</h3>
                {categories.map((category) => (
                    <Categories
                        className='categoryList'
                        key={category.name}
                        name={category.name}
                        path={category.path}
                    />
                ))}
            </div>
        )
    }
}
