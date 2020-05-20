import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3 className="copy">&copy; Burgerexc 2020</h3>

                <div className="social_media">
                    
                    <i className="instagram fab fa-instagram"></i>
                    <i className="facebook fab fa-facebook-square"></i>
                    <i className="twitter fab fa-twitter-square"></i>              
                </div>
            </div>
        )
    }
}
