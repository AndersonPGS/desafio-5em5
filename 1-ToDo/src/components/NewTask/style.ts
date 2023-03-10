import styled from "styled-components";

export const NewTaskContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.grayLight };
  border-radius: 10px;
  padding: 10px 4px;
  margin: 20px 0;

  display: flex;
  align-items: center;

  .plusIcon {
    margin: 10px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: white;
    font-size: 18px;
    flex: 1;
  }
`