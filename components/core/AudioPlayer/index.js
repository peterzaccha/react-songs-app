import React from "react";
import styles from "./AudioPlayer.module.css"
import {Icon, Loader} from "semantic-ui-react";
export function AudioPlayer(props) {
    const player = React.createRef();
    const [playing, setPlaying] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [time, setTime] = React.useState({currentTime:0,duration:0});

    function togglePlaying() {
        setPlaying(p => !p);
    }

    function handleOnChange(e) {
        player.current.currentTime = e.target.value
    }

    React.useEffect(() => {
        if (playing === false) {
            player.current.pause();
        } else {
            player.current.play();
        }
    }, [playing]);

    React.useEffect(() => {
        player.current.addEventListener("timeupdate",e=>{
            setTime({
                currentTime: e.target.currentTime,
                duration:e.target.duration
            });
            if (e.target.currentTime === e.target.duration){
                setPlaying(false);
            }
        });
    }, [player]);


    return (
        <div>
            {isLoading ? <Loader/> : ""}
            <audio ref={player}>
                <source src={props.url} type="audio/ogg"/>
            </audio>
            <Icon onClick={togglePlaying}  circular name={playing ? "pause" : "play"}/>
            <input className={styles.slider} onChange={handleOnChange}
                   type="range"
                   min="0"
                   step="1"
                   max={time.duration}
                   value={time.currentTime}
            />
        </div>
    );
}