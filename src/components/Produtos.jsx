import styled from 'styled-components';

export default function Carde({ imageSrc, title, description }) {
    const Carta = styled.article`
  display: grid;
  place-items: center;
  width: 30rem; 
  height: 20rem; 
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  background-color: white;
  background-image: url(${props => props.imageSrc}); 
  background-size: cover; 
  background-position: center;
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.05);
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;
    height: 50%;
    width: 100%;
    color: #ffffff;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 10%,
      black 100%
    );
    opacity: 0;
    transform: translateY(20%);
    transition: opacity 500ms ease, transform 500ms ease;
  }


  &:hover .card__content {
    opacity: 1;
    transform: translateY(0);
  }

  .card__description {
    font-size: 1rem;
    line-height: 1.5;
    color: #ffffff;
  }
`;
  return (
    <Carta imageSrc={imageSrc}>
      <div className="card__content">
        <div className="card__content--container">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </Carta>
  );
}