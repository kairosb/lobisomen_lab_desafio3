import * as C from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/notfound.png';

export const Error = () => {
  return (
    <C.Container>
      <img src={Logo} alt='not found' />
      <h1>Página não encontrada!</h1>
      <Link className='link-button' to='/'>
        Voltar para home
      </Link>
    </C.Container>
  );
};
