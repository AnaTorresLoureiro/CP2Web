import ImgError from "../../assets/error.jpeg";
import styled from "styled-components";


export default function Error(){

    const StyledError = styled.section`
        text-align: center;
       h1{
        color: white;
        font-size: 50px;
        margin-bottom: 5%;
       }
       img{
        border: 2px solid  #8a0015;
       }
    `;

    return(
        <StyledError>
            <h1>404 Page Not Found</h1>
            <img src={ImgError} alt="" />
        </StyledError>
    )
}