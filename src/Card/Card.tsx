import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    handleSearch: (_: string) => void
}

const SearchInput = styled.input`
    background: #010620;
    border: 1px solid #253172;
    border-radius: 4px;
    color: white;
`;

export function Card({...props}: CardProps) {
    const [ username, useUsername ] = useState('');

    const { handleSearch } = props;

    function handleUsernameChange(event:  React.ChangeEvent<HTMLInputElement>) {
        useUsername(event?.target?.value);
    }

    function handleUsernameEnter(event:  React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === 'Enter') {
            handleSearch(username);
        }
    }

    return <>  
        <SearchInput 
            onChange={handleUsernameChange}
            onKeyDown={handleUsernameEnter}
            value={username}
            className="search" 
        /> 
        
        <button onClick={() => handleSearch(username)}>Pesquisar usuário</button>
    </>
}

export default Card;