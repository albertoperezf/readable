import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Categories } from '../index';
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
            <div className='categorieList'>
                I'm the categories list
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/>
                <Categories/>
            </div>
        )
    }
}
