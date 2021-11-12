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
    parent: '/dashboard/',
    path: '/',
  },
  {
    id: 2,
    screen: 'Running Plan',
    icon: <BiTimer className='bi bi-grid m-1' />,
    parent: '/dashboard/',
    path: '/plan',
  },
  {
    id: 3,
    screen: 'Order',
    icon: <MdOutlineFavoriteBorder className='bi bi-grid  m-1' />,
    parent: '/dashboard/',
    path: '/order',
  },
  {
    id: 4,
    screen: 'Edit Profile',
    icon: <FaUserEdit className='bi bi-grid  m-1' />,
    parent: '/dashboard/',
    path: '/profile',
  },
];

export {data}