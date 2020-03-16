import React from 'react';
import {Image, Search} from "semantic-ui-react";
import {useSearch} from "../../../hooks/search/useSearch";
import _ from 'lodash'
import Router from "next/router";

function SearchBar(props) {

    const [searchValue, setSearchValue] = React.useState(null);
    const {results, isLoading} = useSearch(searchValue);

    function handleSearchChange(e, {value}) {
        setSearchValue(value)
    }

    function handleSearchResultClick(e,track){
        Router.push('/songs/[id]',`/songs/${track.result.key}`)
    }


    return (
        <Search
            loading={isLoading}
            results={results}
            onSearchChange={_.debounce(handleSearchChange, 600)}
            onResultSelect={handleSearchResultClick}
            resultRenderer={
                (track) =>
                    <div>
                        <Image style={{width:"auto"}} src={track.image}/>
                        {track.title}
                        <div>{track.description}</div>
                    </div>
            }
            placeholder='Search...'/>
    );
}

export default SearchBar;