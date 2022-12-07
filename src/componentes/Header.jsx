import React from 'react'

const Header = (props) => {
    return (
        <div className="headerGaleria">
            <h1 className="galeriaEncabezado"> {props.title} </h1>
        </div>
    )
}

export default Header;