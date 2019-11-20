import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class Logout extends Component {


    logOut=()=>{
        var answer = window.confirm('are you sure you wish to logout?')
        if (answer) {
            localStorage.clear();
            window.location.href = '/';
        }
        else    {
            return (
                <>Loading...
            {window.location.href = '/home'}
            </>
            )}}


    render() {
        return (
            <div>
           
                {this.logOut()}
            </div>
        )
    }
}
