import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";
import moment from "moment";
import "moment-duration-format";
import Router from "next/router";
function SongCard(props) {
    function handleClick(id) {
        Router.push('/songs/[id]',`/songs/${props.song.id}`)
    }
    return (
            <Card style={{width:"19em"}} onClick={handleClick}>
                <Image src={`https://api.napster.com/imageserver/v2/albums/${props.song.albumId}/images/500x500.png`} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.song.name}</Card.Header>
                    <Card.Meta>
                        <Icon name="music"/>
                        <span className='date'>{moment.duration(props.song.playbackSeconds,'seconds').format("m:s")}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.song.albumName}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.song.artistName}
                    </a>
                </Card.Content>
            </Card>
    );
}

export default SongCard;