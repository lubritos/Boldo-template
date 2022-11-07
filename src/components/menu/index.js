import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';

const MenuN = styled.div`
    display:flex;
    width:50%;
    justify-content:space-around;
    align-items: center;
`

const pages = [
    {
        label:"product",
        path:"/"
    },
    {
        label:"services",
        path:"/Services"
    },
    {
        label:"about",
        path:"/About"
    }

];


function MenuMt() {
    return ( 
    <MenuN>
        {pages.map((page) => (
            <MenuItem key={page.label}>
                {page.label}
            </MenuItem>
            
        ))}

    </MenuN>
    )
}

export default MenuMt;