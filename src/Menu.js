import React from 'react'

const Menu = () => {
    const menuItems = ["Home", "Team", "About"]

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menuItems.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu