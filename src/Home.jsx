import React, { Component } from 'react';
const rp = require('request-promise'); // you can use other libraries for this (like axios)
const $ = require('cheerio');
const URL = 'https://www.ebay.com/';

export default class Home extends Component {
    constructor() {
        super()
        this.rp = rp
        this.$ = $
        this.URL = URL
    }

    scraping = () => {
        this.rp(this.URL)
        .then(function (html) {
                console.log(html);
                debugger

                const data = this.$('li.hl-cat-nav__js-tab>a', html);
                const resData = [];
                console.log(data);
                data.each(function (i, e) {
                    const temp = {
                        name: this.$(this).text(),
                        link: this.$(this).attr().href
                    }
                    resData.push(temp);
                });
                console.log(resData);


            })
            .catch(function (err) {
                console.log(err);
                //handle error
            });
    }

    componentDidMount = () => {
        this.scraping()
    }
    render() {
        return (
            <div>

                <div>
                    Home
                </div>
                <div>
                    Home
                </div>
                <div>
                    Home
                </div>
                <div>
                    Home
                </div>
                <div>
                    Home
                </div>
                <div>
                    Home
                </div>
            </div>
        )
    }
}
