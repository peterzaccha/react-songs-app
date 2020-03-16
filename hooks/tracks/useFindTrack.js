import React from "react";
import axios from "axios";

export function useFindTrack(id) {

    const [isLoading,setIsLoading] = React.useState(true);
    const [track,setTrack] = React.useState(null);

    React.useEffect(()=>{
        const fetcher = async url =>{
            setIsLoading(true);
            const response = await axios({
                url,
                method:"get",
                params:{
                    apikey: "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
                }
            });
            setTrack(response.data.tracks[0]);
            setIsLoading(false);
        };
        if(id){
            fetcher(`http://api.napster.com/v2.2/tracks/${id}`)
        }
    },[id]);
    return {track,isLoading};

}