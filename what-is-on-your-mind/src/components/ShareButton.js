import React from 'react'

const ShareButton = ({onClick}) => {
    
    return (
        <button className="SendButton" onClick={onClick}>
          Share it with the world!
        </button>
    )
}

export default ShareButton
