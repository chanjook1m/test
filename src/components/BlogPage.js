import { useContext } from 'react';
import { UserContext } from '../store/user';

export default function BlogPage() {

  const { user, dispatch } = useContext(UserContext);
  return (
    <div>
      <h1>
        BlogPage

      </h1>
      <div>{user.job}</div>
      <button onClick={() => dispatch({ type: 'changeJob', text: 'trader' })}>change job</button>
    </div>
  );
}