import styled from "styled-components";

export const TaskContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.completed ? props.theme.colors.secondary : props.theme.colors.primary };
  border-radius: 10px;
  padding: 10px 4px;
  margin: 15px 0;

  background-color: ${props => props.completed ? props.theme.colors.gray : props.theme.colors.primary };

  box-shadow: ${props => props.completed ? "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" : `${props.theme.colors.primaryLight} 0px 1px 10px, rgba(0, 0, 0, 0.22) 0px 10px 10px` }; 
  

  transition: all .2s;

  &:hover{
    border: 1px solid ${props => props.completed ? props.theme.colors.grayLight : props.theme.colors.primaryLight };
    background-color: ${props => props.completed ? props.theme.colors.grayLight : props.theme.colors.primaryLight };

    cursor: pointer;
  }

  label {
    color: ${props => props.completed ? props.theme.colors.grayLight : props.theme.colors.gray }; 

    text-decoration: ${props => props.completed ? "line-through" : "initial"};

    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: all .2s;
    margin-left: 5px;
    cursor: pointer;
  }

  &:hover label {
    color: ${props => props.completed ? props.theme.colors.primary : props.theme.colors.grayLight }; 
  }


  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label:before {
    content: "";
    display: flex;
    width: 25px;
    height: 25px;
    border: 2px solid #666;
    border-radius: 10px;
    -webkit-transition: all 0.2s, background 0.2s ease-in-out;
    transition: all 0.2s, background 0.2s ease-in-out;
    background: ${props => props.theme.colors.gray };

    margin-right: 8px;
  }
    input[type="checkbox"]:checked + label:before {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    border: 2px solid ${props => props.theme.colors.primary };
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    background: ${props => props.theme.colors.primaryLight };
  }
`
