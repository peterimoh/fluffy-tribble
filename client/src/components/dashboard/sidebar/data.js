import {
  BsGrid,
  BiTimer,
  MdOutlineFavoriteBorder,
  FaUserEdit,
} from 'react-icons/all';

const data = [
  {
    id: 1,
    screen: 'Dashboard',
    icon: <BsGrid className='bi bi-grid m-1' />,
    uri: '/dashboard',
  },
  {
    id: 2,
    screen: 'Running Plan',
    icon: <BiTimer className='bi bi-grid m-1' />,
    uri: '/dashboard/plan',
  },
  {
    id: 3,
    screen: 'Order',
    icon: <MdOutlineFavoriteBorder className='bi bi-grid  m-1' />,
    uri: '/dashboard/order',
  },
  {
    id: 4,
    screen: 'Edit Profile',
    icon: <FaUserEdit className='bi bi-grid  m-1' />,
    uri: '/dashboard/profile',
  },
];

export {data}