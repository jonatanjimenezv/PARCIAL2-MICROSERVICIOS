
import { UserList } from '@/components/user-list';

const UserListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios Creados</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
