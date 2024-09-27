import styled from "styled-components";

export default function HoverCard({ icon, hoverText }){

    const Card = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: white;
    font-size: 24px;
    border-radius: 0;
    transition: all 0.5s ease;
    cursor: pointer;
    position: relative;
    &:hover {
        border-radius: 50%;
        background-color: #8a0015;
    }
    `;

    const IconContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;  
    opacity: 1;

    ${Card}:hover & {
        opacity: 0;  
    }
    `;

    const HoverContent = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    opacity: 0; 
    position: absolute;
    transition: opacity 0.5s ease;  

    ${Card}:hover & {
        opacity: 1;  
    }
    `;

    return (
      <Card> 
        <IconContent>
            <img src={icon} alt="" />
        </IconContent>
        <HoverContent>{hoverText}</HoverContent> 
      </Card>
    );
  };