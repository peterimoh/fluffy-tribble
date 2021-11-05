import Activate from './screens/auth/Activate';
import Cart from './screens/cart/Cart';
import Dedicated from './screens/dedicated/Dedicated';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import SinglePlan from './screens/plan/SinglePlan';
import Signup from './screens/signup/Signup';
import SingleProduct from './screens/singleProduct/SingleProduct';

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
];

export default routes;
