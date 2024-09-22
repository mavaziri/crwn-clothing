import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      {/* <h1>TEST</h1> */}
    </div>
  );
};

export default Home;
