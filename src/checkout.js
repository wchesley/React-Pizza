import React, { Component } from 'react'
import UserInfo from './Home'

class Checkout extends Component    {
    render() {
        return(
            <form>
                <UserInfo UserInfo='Name' />
                <UserInfo UserInfo='Phone Number' />
                <UserInfo UserInfo='Address' />
                <UserInfo UserInfo='Payment' />
            </form>
        );
    }
}

export default Checkout; 