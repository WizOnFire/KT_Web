import styled from "styled-components";

export type TSearchBar = {
    containerWidth?: string;
    buttonWidth: string;
    height: string;
    lineHeight?: string;
    placeholder?: string;
    onSearch:(term:string)=>void;
  }

export const Input = styled.input<{ width?: string; height?: string; lineHeight?: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    line-height: ${({ lineHeight }) => lineHeight};
    border: 1px solid #9a9a9a;  
    border-radius: 8px;
    font-size: 12px;
    padding: 0 8px;
    box-sizing: border-box;
    ::placeholder {
        color: #9a9a9a; 
        font-size: 12px;
    }
`;

export const SearchIcon = styled.div`
  font-size: 20px;
  margin-top: 2px;
  margin-right: 5px;
`;