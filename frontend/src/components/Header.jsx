import { Button, Navbar, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaMoon, FaSearch, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar className="border-b-2 flex-2 justify-between items-center px-4">
            <div className='mx-3'>
                <NavLink exact to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' activeClassName="text-white">
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Shub's </span>
                    Blog
                </NavLink>
            </div>
            <div className='mr-3 relative flex'>
                <form>
                    <TextInput
                        type='text'
                        placeholder='Search...'
                        className='hidden md:inline'
                    />
                </form>
                <span className='absolute right-[9px] top-[9px] cursor-pointer hidden md:inline'>
                    <FaSearch />
                </span>
                <Button className='w-12 h-10 md:hidden relative rounded-full flex items-center justify-center' color='gray'>
                    <FaSearch />
                </Button>
            </div>
            <div className="hidden md:flex justify-evenly space-x-16 font-bold">
                <NavLink exact to="/" className={`text-gray-700 dark:text-white ${pathname === '/' && 'text-green-400'}`}>
                    Home
                </NavLink>
                <NavLink to="/about" className={`text-gray-700 dark:text-white ${pathname === '/about' && 'text-green-400'}`}>
                    About
                </NavLink>
                <NavLink to="/projects" className={`text-gray-700 dark:text-white ${pathname === '/projects' && 'text-green-400'}`}>
                    Projects
                </NavLink>
            </div>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10  rounded-full relative flex items-center justify-center border-gray-200' color='gray'>
                    <FaMoon />
                </Button>
                <NavLink to='/SignIn'>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sign In
                    </button>
                </NavLink>
                <div className="md:hidden">
                    <Button onClick={handleToggle} className="text-gray-700 dark:text-white py-1">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 z-10 border-b-2 border-gray-200 dark:border-gray-700 font-bold" >
                    <div className="flex flex-col space-y-4 py-4 px-8">
                        <NavLink exact to="/" className={`text-gray-700 dark:text-white ${pathname === '/' && 'text-green-400'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={`text-gray-700 dark:text-white ${pathname === '/about' && 'text-green-400'}`}>
                            About
                        </NavLink>
                        <NavLink to="/projects" className={`text-gray-700 dark:text-white ${pathname === '/projects' && 'text-green-400'}`}>
                            Projects
                        </NavLink>
                    </div>
                </div>
            )}
        </Navbar>
    );
}

export default Header;
