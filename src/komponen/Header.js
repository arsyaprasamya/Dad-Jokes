import React, { Component } from 'react';
// import './../css/Header.css';

class Header extends Component {
    render(){
        return(
            <div>
                {/* <h2>Ini header</h2> */}
                {/* <h2>Halo {this.props.isi}</h2> */}
                {/* <h2>Halo {this.props.nama}</h2>
                <h2>Usia Anda {this.props.usia}</h2> */}
                <h2>Halo {this.props.orang.nama}</h2>
                <h2>Usia Anda {this.props.orang.usia}</h2>
                <img src={this.props.gambar}/>
                {/* <p>Ini kalimat dari header</p> */}
            </div>
        )
    }
}

export default Header;