import { ChangeEvent, useState } from 'react';
import * as C from './styles';
import Logo from '../../assets/logo-vertical.svg';
import { SwitchButton } from '../../components/Switch';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSearchButton = async () => {
    if (username.trim() === '') {
      alert('Digite o nome de algum usuário.');
      return;
    }

    await api
      .get(`users/${username}`)
      .then(reponse => {
        navigate(`/${username}`);
      })
      .catch(error => {
        console.log(error);
        alert('Usuário não encontrado');
        setUsername('');
      });
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.Logo src={Logo} alt='github logo' />
        <C.Input
          placeholder='Enter user name'
          value={username}
          onChange={handleChangeName}
          autoFocus
        />
        <C.SearchButton onClick={handleSearchButton}>Search</C.SearchButton>
        <SwitchButton />
      </C.Wrapper>
    </C.Container>
  );
};
