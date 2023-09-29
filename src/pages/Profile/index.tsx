import * as C from './styles';
import { useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { UserInfo } from './components/UserInfo';
import { ReposCard } from './components/ReposCard';
import { useRequest } from '../../hooks/useRequest';
import { User } from '../../types/User';
import { Repository } from '../../types/Repository';

export const Profile = () => {
  const params = useParams();

  const { data: user } = useRequest<User>(`users/${params.username}`);
  const { data: repositories } = useRequest<Repository[]>(
    `users/${params.username}/repos`
  );

  return (
    <C.Container>
      <Header />
      <UserInfo data={user as User} />
      <C.ReposArea>
        {repositories?.map((item, index) => (
          <ReposCard key={index} data={item} />
        ))}
      </C.ReposArea>
    </C.Container>
  );
};
