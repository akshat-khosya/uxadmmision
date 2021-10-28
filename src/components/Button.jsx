import React from 'react';
const Button = ({ className, imgSrc, imgAlt, text, onClick, color, variant }) => {
    
   
    return (
        <button className={`btn btn-${style} btn-${style}-${color} ${className} ${variant === "small" ? "btn-small" : ""}`} onClick={onClick}>
            {variant !== "small" && <img className="btn__img" src={imgSrc} alt={imgAlt} />}
            {text}
        </button>
    )
}

export default Button