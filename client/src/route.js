import Activate from './screens/auth/Activate';
import Cart from './screens/cart/Cart';
import Cloud from './screens/cloud/Cloud';
import Dashboard from './screens/dashboard/Dashboard';
import Dedicated from './screens/dedicated/Dedicated';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import SinglePlan from './screens/plan/SinglePlan';
import Reseller from './screens/reseller/Reseller';
import Signup from './screens/signup/Signup';
import SingleProduct from './screens/singleProduct/SingleProduct';
import Support from './screens/support/Support';

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
  { id: 12, path: '/dashboard', component: Dashboard },
];

export default routes;
