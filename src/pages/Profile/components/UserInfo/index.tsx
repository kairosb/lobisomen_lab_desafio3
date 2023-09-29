import * as C from './styles';
import { IoLocationSharp } from 'react-icons/io5';
import { RiStackshareLine } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { BsPeopleFill, BsPeople } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { User } from '../../../../types/User';

type Props = {
  data?: User;
};

export const UserInfo = ({ data }: Props) => {
  const { colors } = useTheme();

  return (
    <C.Container>
      <C.Avatar src={data?.avatar_url} />
      <C.Wrapper>
        <C.Username>{data?.name}</C.Username>
        <C.Social>@{data?.login}</C.Social>

        <C.TextInfoArea>
          <C.TextInfo>
            <IoLocationSharp color={colors.secondary} size={20} />
            <C.Text>{data?.location ?? 'Sem informação'}</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <MdWork color={colors.secondary} size={20} />
            <C.Text>{data?.company}</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <BsPeopleFill color={colors.secondary} size={20} />
            <C.Text>{data?.followers}</C.Text>
          </C.TextInfo>

          <C.TextInfo>
            <BsPeople color={colors.secondary} size={20} />
            <C.Text>{data?.following}</C.Text>
          </C.TextInfo>
        </C.TextInfoArea>
      </C.Wrapper>

      <C.InfoReposArea>
        Total Respositories
        <C.TextReposArea>
          {data?.public_repos}
          <RiStackshareLine size={25} color={colors.secondary} />
        </C.TextReposArea>
      </C.InfoReposArea>
    </C.Container>
  );
};
