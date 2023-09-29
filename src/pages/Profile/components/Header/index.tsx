import * as C from './styles';
import Logo from '../../../../assets/logo-horizontal.svg';
import { ImArrowLeft2 } from 'react-icons/im';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <C.Container>
      <C.Logo src={Logo} />
      <C.BackButton onClick={handleBackButton}>
        <ImArrowLeft2 size={30} color={colors.text} />
      </C.BackButton>
    </C.Container>
  );
};
