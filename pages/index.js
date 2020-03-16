// import App from "../components/layout/App/App";
import {Header, Icon} from "semantic-ui-react";
import dynamic from "next/dynamic";
import React from "react";

const App = dynamic(() => import("../components/layout/App/App"), {
    loading: () => <p>Loading...</p>
});


const Home = () => (
    <App>
        <Header as='h2'>
            <Icon name='music' />
            <Header.Content>
                Songs App
                <Header.Subheader>Manage your preferences</Header.Subheader>
            </Header.Content>
        </Header>
    </App>
);

export default Home
