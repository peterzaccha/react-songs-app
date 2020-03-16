import axios from "axios";
import React from "react";

export function useSearch(value) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [results,setResults] = React.useState([]);

    React.useEffect(()=>{
            const fetcher = async url =>{
            setIsLoading(true);
            try {
                const response = await axios({
                    url,
                    method:"get",
                    params:{
                        query:value,
                        per_type_limit:5,
                        apikey: "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
                    }
                });
                const data = response.data.search.data.tracks.map(track=>{
                    return {
                        title : track.name,
                        key : track.id,
                        description:track.albumName,
                        image:`https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/70x70.png`
                    }
                });
                setResults(data);

            }catch (e) {

            }
            setIsLoading(false)
        };
        if (value) {
            fetcher("http://api.napster.com/v2.2/search")
        }
    },[value]);
    return {results,isLoading};
}