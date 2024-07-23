'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar'; // Adjust the path to your Navbar component as needed

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  // Define auth routes where you don't want to show the navbar
  const authRoutes = ['/auth/login', '/auth/sign-up', '/auth/forgot-password']; 

  return (
    <>
      {!authRoutes.includes(pathname) && <Navbar />}
    </>
  );
};

export default ClientLayout;