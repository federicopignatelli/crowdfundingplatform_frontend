import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-600 py-4 text-sm mb-0">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                    <p className="text-center md:text-left">Informazioni casuali</p>
                </div>
                <div className="w-full md:w-auto">
                    <ul className="flex justify-center md:justify-start">
                        <li className="mr-6"><a href="#" className="hover:text-warning">Termini e condizioni</a></li>
                        <li className="mr-6"><a href="#" className="hover:text-warning">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-warning">Contatti</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <p className="text-center md:text-right">&copy; {new Date().getFullYear()} TechFunds. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
