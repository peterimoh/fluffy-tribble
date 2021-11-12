import Activate from './screens/auth/Activate';
import Cart from './screens/cart/Cart';
import Cloud from './screens/cloud/Cloud';
import Dashboard from './screens/dashboard/Dashboard';
import RunningPlan from './screens/dashboard/RunningPlan';
import Order from './screens/dashboard/Order'
import Dedicated from './screens/dedicated/Dedicated';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import SinglePlan from './screens/plan/SinglePlan';
import Reseller from './screens/reseller/Reseller';
import Signup from './screens/signup/Signup';
import SingleProduct from './screens/singleProduct/SingleProduct';
import Support from './screens/support/Support';
import Profile from './screens/dashboard/Profile';

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
  { id: 7, path: '/product/:id', component: SingleProduct },
  { id: 8, path: '/cart/:id?', component: Cart },
  { id: 9, path: '/cloud', component: Cloud },
  { id: 10, path: '/reseller', component: Reseller },
  { id: 11, path: '/support', component: Support },
];

const privateRoutes = [
  {
    id: 1,
    path: '/dashboard/:id',
    component: Dashboard,
  },
  {
    id: 2,
    path: '/dashboard/:id/plan',
    component: RunningPlan,
  },
 
  {
    id: 3,
    path: '/dashboard/:id/order',
    component: Order,
  },
  {
    id: 4,
    path: '/dashboard/:id/profile',
    component: Profile,
  },
];

export { routes, privateRoutes };

