import styled, { css } from 'styled-components';

interface LegendItemProp {
  color: string;
}

interface TypeButtonProp {
  isActive?: boolean;
}

const Header = styled.header`
  padding: 2em 0;
`;

const Results = styled.div`
  background-color: #141432;
  border-radius: 10px;
  padding: 2em;
  width: 100%;
  height: 100%;
`;

const Charts = styled.section`
  display: grid;
  /* grid-template-rows: auto auto;
  grid-template-columns: auto auto; */
  gap: 1em;
  @media (max-width: 1120px) {
    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;

    /* grid-template-columns: auto; */
  }
`;

const FullGridItem = styled.div`
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: auto;
  }
`;

const Legend = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 2em;
  margin-top: 1em;
  width: 100%;
`;

const LegendItem = styled.div<LegendItemProp>`
  display: flex;
  align-items: center;
  gap: 0.2em;
  span {
    width: 12px;
    height: 12px;
    border-radius: 50vh;
    ${({ color }) =>
      color &&
      css`
        background-color: ${color};
      `}
  }
  h5 {
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
  }
`;

const TypeButton = styled.button<TypeButtonProp>`
  width: 50%;
  padding: 1em;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(111, 207, 151, 0.7);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #6fcf97;
      border-color: #6fcf97;
      color: #141432;
    `}
`;

export {
  TypeButton,
  Legend,
  LegendItem,
  Header,
  Results,
  Charts,
  FullGridItem,
};
