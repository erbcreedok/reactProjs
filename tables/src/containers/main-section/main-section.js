import React, { Component } from 'react';
import './main-section.css';


export default class MainSection extends Component {
    render() {
        return (
            <section id="main">
                <div className="container">
                    <h1 className="my-0 bigger">Привет,</h1>
                    <h4 className="my-2 font-normal">и добро пожаловать на тестовые сервера Альфа банка!</h4>
                    <br/>
                    <p className="mt-5">Ниже вам предоставлены существующие тестовые сервера</p>
                    <img className="logo-image" alt="" src="http://yerbols.gq/images/logoalpha.png"/>
                </div>
            </section>
        )
    }
}
