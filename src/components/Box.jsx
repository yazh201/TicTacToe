import React from "react";

const Box = ({ value, onClick }) => {

    const style = value === "X" ? " x" : " o"

    return (
        <button className={"box" + style} onClick={onClick}>{value}</button>
    );
}

export default Box;