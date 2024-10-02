import styled from "styled-components";

export default function HoverCard({ icon, hoverText }){

    const Card = styled.div`
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2e2b2bb5;
      color: white;
      font-size: 24px;
      margin-top: 10%;
      margin-bottom: 10%;
      border-radius: 0;
      transition: all 0.5s ease;
      cursor: pointer;
      position: relative;
      text-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 2px #fff, 0 0 40px #8a0015,
                  0 0 50px #8a0015, 0 0 60px #8a0015;

      &:hover {
          border-radius: 50%;
          background-color: #8a0015;
          box-shadow: 0 0 20px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #8a0015,
                      0 0 70px #8a0015, 0 0 80px #8a0015, 0 0 100px #8a001576;
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