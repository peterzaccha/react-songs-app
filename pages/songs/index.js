import SongCard from "../../components/common/SongCard/SongCard";
import {useGetTracks} from "../../hooks/tracks/useGetTracks";
import Skeleton from 'react-loading-skeleton';
import {Card, Container, Divider, Pagination, Segment} from "semantic-ui-react";
import React from "react";
import dynamic from "next/dynamic";
const App = dynamic(() => import("../../components/layout/App/App"), {
    loading: () => <p>Loading...</p>
});
const Index = () => {
    const [page, setPage] = React.useState(1);
    const {tracks, error, isLoading} = useGetTracks(page);

    function handlePageChange(e, {activePage}) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setPage(activePage)
    }


    if (isLoading === true) {
        return (<App> <Skeleton/> </App>)
    }

    const totalPages = Math.floor(tracks.data.meta.totalCount / 16);
    return (
        <App>
            <Card.Group centered>
                {tracks.data.tracks.map((track) => <SongCard  key={track.id} song={track}/>)}
            </Card.Group>
            <Segment vertical>
                <Pagination nextItem={false} prevItem={false} defaultActivePage={page} onPageChange={handlePageChange} totalPages={totalPages}/>
            </Segment>
        </App>
    )
};

export default Index
// Application name	test
// API key	db33fb0864a332c74be80bbd6f304964
// Shared secret	6ea577502c9a54b14caadbf5a100f9e5
// Registered to	peter44322