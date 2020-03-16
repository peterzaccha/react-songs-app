import React from 'react';
import Navbar from "../../core/Navbar/Navbar";
import {Container} from "semantic-ui-react";


function App(props) {
    return (
        <div>
            <Navbar/>
            <Container style={{ marginTop: '7em' }}>
                {props.children}
            </Container>
        </div>
    );
}

export default App;