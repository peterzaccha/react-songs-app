import React, {createRef} from 'react';
import {Container, Input, Menu, Sticky} from "semantic-ui-react";
import Router from 'next/router';
import SearchBar from "../../common/SearchBar/SearchBar";

function Navbar(props) {
    return (
        <Menu fixed="top" style={{background:"#fff", boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',}} secondary>
            <Container >
                <Menu.Item
                    name='home'
                    onClick={() => Router.push('/')}
                />
                <Menu.Item
                    name="songs"
                    onClick={() => Router.push('/songs')}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <SearchBar/>
                    </Menu.Item>
                </Menu.Menu>
            </Container>

        </Menu>
    );
}

export default Navbar;