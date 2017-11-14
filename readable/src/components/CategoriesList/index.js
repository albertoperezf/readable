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
        return (
            <div className='categorieList'>
                {categories.map((category) => (
                    <Categories
                        name={category.name}
                        path={category.path}
                        key={category.name} />
                ))}
            </div>
        )
    }
}
