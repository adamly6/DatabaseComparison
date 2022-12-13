import styled from 'styled-components';

const Header = styled.header`
  padding: 2em 0;
`;

const Content = styled.div`
  margin-top: 1em;
  background-color: #141432;
  border-radius: 10px;
  padding: 2em;
`;

const SectionList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const BlockList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(107px, 8%));
  justify-content: start;
  gap: 1em;
  @media (max-width: 480px) {
    justify-content: center;
  }
  @media (max-width: 375px) {
    grid-template-columns: 107px 107px;
  }
`;

const Button = styled.button`
  margin-top: 2em;
  background-color: #524eee;
  padding: 1em;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 2vh;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  &:hover:enabled,
  &:focus-within:enabled {
    transform: scale(1.05);
  }
  &:active {
    opacity: 0.6;
  }
  &:disabled {
    cursor: initial;
    opacity: 0.3;
  }
`;

export { Content, BlockList, Header, Button, SectionList };
