import styled from "styled-components";
import { Button } from "@mui/material";

const Botones = styled.div`
    display:flex;
`

function Butons() {
    return ( 
        <Botones>
            <Button
                variant="contained"
                >
                    Buy Template
                </Button>
            <Button
                variant="outlined"
                >
                Explore
            </Button>
        </Botones>
     );
}

export default Butons;