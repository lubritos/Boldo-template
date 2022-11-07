import styled from 'styled-components';
import MenuMt from '../menu';

const Nav = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;
    align-items: center;
`
const Logo = styled.img`
    width:2rem;
    height:3rem;


`
const LogoTipo = styled.div`
    display:flex;
    flex-direction:row;
    width:10%;
    justify-content:space-around;
    align-items: center;
`

function Navbar() {
    return ( 
        <div>
            <Nav>
                <LogoTipo>
                    <Logo src={`${process.env.PUBLIC_URL}/logo-boldo.png`} alt=''/>
                    <h1>Boldo</h1>
                </LogoTipo>
                <MenuMt/>

            </Nav>
        </div>
     );
}

export default Navbar;