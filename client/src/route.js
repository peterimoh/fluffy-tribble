import Activate from './screens/auth/Activate';
import Dedicated from './screens/dedicated/Dedicated';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import SinglePlan from './screens/plan/SinglePlan';
import Signup from './screens/signup/Signup';

const routes = [
  {
    id: 1,
    path: '/',
    component: Home,
  },
  { id: 2, path: '/login', component: Login },
  { id: 3, path: '/signup', component: Signup },
  { id: 4, path: '/activateaccount', component: Activate },
  { id: 5, path: '/dedicated-servers', component: Dedicated },
  { id: 6, path: '/plans/:id', component: SinglePlan },
];

export default routes;
