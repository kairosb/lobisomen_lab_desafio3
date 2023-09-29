import * as C from './styles';
import { BsFillStarFill, BsFileEarmarkCodeFill } from 'react-icons/bs';
import { RiShareBoxFill, RiStackshareLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Repository } from '../../../../types/Repository';

type Props = {
  data: Repository;
};

export const ReposCard = ({ data }: Props) => {
  const { colors } = useTheme();

  return (
    <C.Container>
      <C.Wrapper>
        <C.Header>{data?.name}</C.Header>
        <C.Description>{data?.description}</C.Description>
      </C.Wrapper>

      <C.Footer>
        <C.Info>
          <BsFillStarFill color={colors.secondary} size={14} />
          <C.TextInfo>{data?.stargazers_count}</C.TextInfo>
        </C.Info>

        <C.Info>
          <RiStackshareLine color={colors.secondary} size={14} />
          <C.TextInfo>{data?.forks_count}</C.TextInfo>
        </C.Info>

        <C.Info>
          <BsFileEarmarkCodeFill color={colors.secondary} size={14} />
          <C.TextInfo>{data?.language}</C.TextInfo>
        </C.Info>

        <C.Info>
          <a href={data?.html_url} target='_blank'>
            <RiShareBoxFill color={colors.secondary} size={14} />
          </a>
        </C.Info>
      </C.Footer>
    </C.Container>
  );
};
