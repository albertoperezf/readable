import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Content, Footer, Header } from '../index';

import './styles.css';

export default class MainContent extends Component {
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
