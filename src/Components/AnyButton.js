import React from 'react'
import './AnyButton.css'

const STYLES = [
    'anybtn--primary',
    'anybtn--outline'
]

const SIZES = [
    'anybtn--medium',
    'anybtn--large'
]

export const AnyButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}