import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = (): Promise<IUserData[]> => axios.get('http://localhost:8000/users').then(res => res.data);

const Loading = () => <div>Loading...</div>;

const ErrorComp = () => <div>An error occurred</div>;

interface IUserData {
  id: number;
  username: string;
  role: string;
}

const Users = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorComp />
  }

  return (
    <div>
      <select>
        <option>Create new user</option>
        {data?.map((user: IUserData) => <option key={user.id}>{user.username}</option>)}
      </select>
    </div>
  ) 
};

export default Users;