import React from "react";
import axios from "axios";

export function useGetTracks(page) {
    const [tracks, setTracks] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const fetcher = async url => {
            setIsLoading(true);
            try {
                const res = await axios({
                    url:"http://api.napster.com/v2.2/tracks/top",
                    method:"get",
                    params: {
                        limit: 16,
                        offset: page * 16,
                        apikey: "YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4"
                    }
                });
                setTracks(res);
            } catch (e) {
                setError(e);
            }
            setIsLoading(false);
        };
        fetcher("http://api.napster.com/v2.2/tracks/top");
    },[page]);

    return {tracks, error, isLoading}

}