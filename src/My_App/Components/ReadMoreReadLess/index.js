import React, { useState } from 'react'

function ReadMoreReadLess({ children }) {

    const [isReadMoreShow, setIsReadMoreShow] = useState(false)

    function handleReadMoreOrLess() {
        setIsReadMoreShow(!isReadMoreShow)
    }

    return (
        <>
            <p style={{ marginLeft: "10px", marginTop: "-4px", fontSize: "14px" }}>{isReadMoreShow ? children : children.substr(0, 200)}
                <button style={{
                    background: "transparent",
                    outline: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "5px",
                    color: "grey",
                    fontWeight:"bold"
                }} onClick={() => handleReadMoreOrLess()}>{isReadMoreShow ? "...Less" : "... More"}</button>
            </p>
        </>
    )
}

export default ReadMoreReadLess;