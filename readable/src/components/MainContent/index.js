import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import axios from 'axios';
import { Content, Footer, Header } from '../index';

import './styles.css';

export default class MainContent extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
