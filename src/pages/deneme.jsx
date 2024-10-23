import { useSelector } from 'react-redux';

export const SomeComponent = () => {
  const user = useSelector((state) => state.client.user); // Kullanıcı bilgilerini al

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};