import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='fw-bold text-light bg-dark pt-5 bottom-sticky' style={{ height: "80px" }}>
            <p>
                <small>© {year} Family Mart</small>
            </p>
        </footer>
    );
};

export default Footer;