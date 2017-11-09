import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import api from '../../utils/api'
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
        // const categories = api.allPost
        // console.log(categories)
        return (
            <div className='categorieList'>
                I'm the categories list

                {/*<ul>*/}
                    {/*{categories.map((categorie) =>*/}
                        {/*<li>{categorie.name}</li>*/}
                    {/*)}*/}
                {/*</ul>*/}


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
