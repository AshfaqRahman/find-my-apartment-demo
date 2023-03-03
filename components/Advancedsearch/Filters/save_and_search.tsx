import { Button } from "@mui/material";


export default function SaveAndSearch() {
   
    return (
    <>
        <div className="row">
            <div className="col-md-6" >
                <Button  variant="outlined" color="success">Save Search</Button>
            </div>
            <div className="col-md-4">
                <Button  variant="contained" color="success">Search</Button>
            </div>
        </div>
    </>
    )
}