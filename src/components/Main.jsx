import React from 'react';
import Header from './Header';
import Box from './box/Box';
import './box/Box.css';
import items from './/box/Items';

function Main() {
    return (
        <div>
            <Header />
            <p>Hello, This is my project portfolio </p>
            <h2 className={"project-heading"}>Projects</h2>
            <div className="box-container">
                {items.map((items) => (
                    <Box
                        title={items.title}
                        description={items.description}
                        image={items.image}
                        link={items.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;