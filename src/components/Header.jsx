import React from 'react'
import { Container } from "@mui/material";


const Header = () => {
    return (
        <Container maxWidth="fluid">
            <Container>
                <header className='header'>
                    <h1>Covid19 Tracker</h1>
                </header>
          </Container>
        </Container>
    );
}

export default Header;