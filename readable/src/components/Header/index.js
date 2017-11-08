import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
import {Logo} from '../index';
import './styles.css'

export default class Header extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ReactBook</h1>
            </header>
        )
    }
}
