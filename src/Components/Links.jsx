import React from 'react'
import { NavLink } from 'react-router-dom'

function Links({ text }) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to = {text} className= "hover:text-yellow-500 hover:font-serif">{text}</NavLink >
                </li>
            </ul>
        </div>
    )
}

export default Links