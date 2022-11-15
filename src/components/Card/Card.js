import styled from "styled-components";

const CardUi = styled.div`
    display:flex;
    flex-direction:column;
    width:15rem;
`
function Card({image, title, descripcion}) {
    return ( 
        <CardUi>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{descripcion}</p>
        </CardUi>
     );
}

export default Card;