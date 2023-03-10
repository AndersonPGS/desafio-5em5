import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.gray};
  min-height: 100vh;
  color: white;
`

export const Wrapper = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;

  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding: 10px;
`