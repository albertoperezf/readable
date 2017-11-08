import React, {Component} from 'react'
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { GoCode, GoHeart } from '../index';
import './styles.css'

export default class Footer extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <footer className='footer'>
                <GoCode/> with <GoHeart/>
            </footer>
        )
    }
}
