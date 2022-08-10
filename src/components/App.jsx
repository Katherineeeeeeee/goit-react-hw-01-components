import Profile from './Profile/Profile';
import user from '../Files/user.json';

import Statistics from './Statistics/Statistics';
import data from '../Files/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../Files/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friends} />;
    </div>
  );
};
