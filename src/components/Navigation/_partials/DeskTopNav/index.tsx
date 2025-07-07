//local imports
import AboutUs from '@pages/AboutUs';
import ContactUs from '@pages/ContactUs';
import OurTeam from '@pages/OurTeam';

//third party libraries
import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router';

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

  const {pathname} = useLocation();

  // useEffect to set the current menu item based on the current path
  useEffect(() => {
    console.log(pathname.split('/'));
    let menuPath = pathname.split('/')[1];
    if (menuPath === '') {
      menuPath = 'home'; // Default to home if path is empty
    }
    const currentItem = menuItems.find(item => item.path === pathname || item.path === `/${menuPath}`);
    if (currentItem) {
      setCurrent(currentItem.key);
    } else {
      setCurrent('home'); // Default to home if no match found
    }
  }, [pathname]);

  //function to handle menu click
  const handleMenuClick = (e: { key: string; path: string }) => {
    setCurrent(e.key);
    navigate(e.path);
  };
  
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-4 ">
      {menuItems.map((item, index) => {
        return (
          <div className='relative group' key={index}>
            <Link
              to={item.path}
              key={index}
              onClick={() => handleMenuClick(item)}
              className={`text-blue-500 text-lg font-semibold hover:text-blue-300 transition-colors duration-300`}
            >
              {item.label}
            </Link>
            <div className={`absolute bottom-0 left-0 h-[2px] opacity-0 w-0 rounded-md bg-blue-500 transition-all duration-500 ${current === item.key && 'opacity-100 w-full'}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default DeskTopNav;
