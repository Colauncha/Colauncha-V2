//local imports
import AboutUs from '@pages/AboutUs';
import ContactUs from '@pages/ContactUs';
import OurTeam from '@pages/OurTeam';

//third party libraries
import { useState } from 'react';
import { useNavigate, Link } from 'react-router';

const menuItems = [
  {
    label: 'Home',
    key: 'home',
    path: '/'
  },
  {
    label: 'About Us',
    key: 'about-us',
    path: '/about',
    comp: <AboutUs />
  },
  {
    label: 'Our Team',
    key: 'our-team',
    path: '/team',
    comp: <OurTeam />
  },
  {
    label: 'Contact Us',
    key: 'contact-us',
    path: '/contact',
    comp: <ContactUs />
  }
];

const DeskTopNav: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();
  //function to handle menu click
  const handleMenuClick = (e: any) => {
    setCurrent(e.key);
    navigate(e.path);
  };
  // style for the menu items
  const menuStyle = {
    all: 'text-[#3783FF] text-lg font-semibold hover:border-b-2 border-blue-500 transition duration-300',
    selected: 'text-blue-500 border-b-2 border-blue-500'
  };
  
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4 ">
      {menuItems.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            onClick={() => handleMenuClick(item)}
            className={
              current === item.key
                ? `${menuStyle.all} ${menuStyle.selected}`
                : menuStyle.all
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default DeskTopNav;
