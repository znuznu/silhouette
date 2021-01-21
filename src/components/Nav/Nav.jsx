import React, { useState } from 'react';

const Nav = () => {
    const [links, setLinks] = useState([
        { link: '/skills', text: 'Skills' },
        { link: '/projects', text: 'Projects' },
        { link: '/about', text: 'About' }
    ]);

    return <>{links && links.map((link) => <p key={link.text}>{link.text}</p>)}</>;
};

export default Nav;
