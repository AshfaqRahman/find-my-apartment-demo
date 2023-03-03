import { TextField } from "@mui/material";
import { useState } from "react";


export default function LocationFilter() {
    const [location, setLocation] = useState<string>('Dhaka, Bangladesh')

    const openGoogleMap = () => {
        // window.prompt
        // window.prompt(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank')

    }

    return (
        <>
            <div>
                <TextField  label={location} onClick={openGoogleMap}></TextField>
            </div>

            
        </>
    )
}