import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


interface LocationIQResult {
    place_id: string;
    licence: string;
    osm_type: string;
    osm_id: string;
    boundingbox: [string, string, string, string];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon: string;
}
  

function Index() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState<LocationIQResult[]>([]);

    const handleSearch = async () => {
        //${searchValue}
        // url encode
        const encodedSearchValue = encodeURIComponent(searchValue);
        const response : any = await fetch(`https://us1.locationiq.com/v1/search?key=pk.9460d7ffd98baf8b6d8c01850b4c6b41&q=${encodedSearchValue}&format=json`);
        // console.log(response)
        const data = await response.json();
        console.log(data)
        setSearchResults(data);
    };

    const handleChipClick = (result: LocationIQResult) => {
        console.log(result);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: '4px' }}>
                <TextField
                    label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="contained" onClick={handleSearch} sx={{mx:"10px"}}>Search</Button>
            </Box>
            <Box sx={{
                display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', '-ms-overflow-style': 'none',
                scrollbarWidth: 'none',
                marginTop: 2,
                marginBottom: 2,
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                {searchResults.map((result) => (
                    <Chip
                        key={result.place_id}
                        label={result.display_name}
                        clickable
                        onClick={() => handleChipClick(result)}
                    />
                ))}
            </Box>
        </div>
    );
};

export default Index;
