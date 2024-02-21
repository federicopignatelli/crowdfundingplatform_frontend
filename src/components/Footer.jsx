import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className=" text-gray-400 py-2 w-full border-t border-gray-300">
            <div className="container mx-auto flex flex-row justify-center sm:justify-between">
                <div className="">
                    <span className=" mr-1 text-sm">&copy;</span>
                    <span className=" mr-1 text-sm">TechFunds</span>
                    <span className=" text-sm">|</span>
                    <span className=" ml-1 text-sm"> {getCurrentYear()}</span>
                </div>
                <div className="flex flex-row">
                    <ul className="  text-sm md:flex md:flex-row">
                        <li className="mx-4">About us</li>
                        <li className="mx-4">Our charter</li>
                        <li className="mx-4">Stats</li>
                    </ul>
                    <ul className="  text-sm md:flex md:flex-row">
                        <li className="mx-4">Press</li>
                        <li className="mx-4">Jobs</li>
                        <li className="mx-4">Help Center</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
