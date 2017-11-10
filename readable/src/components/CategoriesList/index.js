import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import api from '../../utils/api'
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
        const allCategories = api.allCategories
        const allPost = api.allPost
        const allCategoriesPost = api.allCategoriesPost
        const postDetails = api.postDetails(1)
        const getComments = api.getComments(1)
        const getCommentsDetails = api.getCommentDetails(1)
        console.log(allCategories)
        console.log(allCategoriesPost)
        console.log(allPost)
        console.log(postDetails)
        console.log(getComments)
        console.log(getCommentsDetails)
    }

    render() {
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
