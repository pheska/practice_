import React from 'react';
import Button from './Button.js'

function Header ({ status }) {

    return (
        <div>
            <a href='/'>National Parks</a>
            <Button status={status} test={'test'}/>
        </div>
    );
};

export default Header;
