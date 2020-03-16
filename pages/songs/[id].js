// import App from "../../components/layout/App/App";
import React , {useMemo} from "react";
import {Header, Image, Segment, Grid} from "semantic-ui-react";
import {useRouter} from 'next/router'
import {useFindTrack} from "../../hooks/tracks/useFindTrack";
import Skeleton from "react-loading-skeleton";
// import {AudioPlayer} from "../../components/core/AudioPlayer";
import dynamic from "next/dynamic";
import AudioPlayer from 'react-h5-audio-player';

const App = dynamic(() => import("../../components/layout/App/App"), {
    loading: () => <p>Loading...</p>
});

const Song = () => {
    const router = useRouter();

    const id = router.query.id;
    const {track, isLoading} = useFindTrack(id);
    if (isLoading) {
        return (<App><Skeleton/></App>)
    }

    // console.log(track);
    return (
        <App>
            <Header as='h2'>
                <Image circular
                       src={`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/500x500.png`}/>
                <Header.Content>
                    {track.name}
                    <Header.Subheader>
                        {track.artistName}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Segment attached>
                <Grid stackable columns="equal">
                    <Grid.Column>
                        <Segment>
                            {track.albumName}
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>

                            <AudioPlayer  src={track.previewURL}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>

        </App>
    )
};

export default Song
