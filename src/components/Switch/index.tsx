import * as C from './styles';
import Switch from 'react-switch';
import { useTheme } from '../../context/Theme';

export const SwitchButton = () => {
  const { state, toggleTheme } = useTheme();

  return (
    <C.Container>
      <Switch
        onChange={() => toggleTheme()}
        checked={state.title === 'light' ? true : false}
        checkedIcon={<span>🌞</span>}
        uncheckedIcon={<span>🌛</span>}
        onColor='#515151'
        offColor='#515151'
        width={42}
        height={22}
        handleDiameter={20}
      />
    </C.Container>
  );
};
