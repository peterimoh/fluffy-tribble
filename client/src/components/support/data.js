import {
  BsClockHistory,
  FaRegAddressCard,
  GiCctvCamera,
} from 'react-icons/all';

const data = [
  {
    id: 1,
    title: '24/7/365 support',
    desc: 'Our certified support engineers are on-site 24/7/365, and keen to provide support with your technical needs within minutes.',
    icon: <BsClockHistory className='svg' />,
  },
  {
    id: 2,
    title: 'Certified engineers',
    desc: 'You can expect personal and experienced technical support from our certified engineers.',
    icon: <FaRegAddressCard className='svg' />,
  },
  {
    id: 3,
    title: 'Proactive network monitoring',
    desc: 'Worldstream’s global 10 Tbit/s network and your individual network performance are proactively monitored 24/7.',
    icon: <GiCctvCamera className='svg' />,
  },
];


export default data