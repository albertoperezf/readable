import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Content from '../Content/index.js';
import Footer from '../Footer/index.js';
import Header from '../Header/index.js';

import './styles.css';

export default class MainContent extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        var myInit = { method: 'GET',
            headers: { 'Authorization': 'whatever-you-want' },
            mode: 'cors',
            cache: 'default' };

        var myRequest = new Request('http://localhost:3001/categories', myInit);

        fetch(myRequest) // Call the fetch function passing the url of the API as a parameter
            .then(function(response) {
                console.log(response)
                // Your code for handling the data you get from the API
            })
            .catch(function(error) {
                console.log(error)
                // This is where you run code if the server returns any errors
            });

        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
