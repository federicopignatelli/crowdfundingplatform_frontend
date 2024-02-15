import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useState } from 'react';

const Supernavbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Stato iniziale di accesso utente

    // Funzione per il logout
    const handleLogout = () => {
        // Logica per effettuare il logout
        setIsLoggedIn(false);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleMenuOpenChange = (newState) => {
        setIsMenuOpen(newState);
    };

    return (
        <Navbar isBordered shouldHideOnScroll>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-mono text-2xl">TechFunds</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-mono text-2xl">TechFunds</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Explore campaigns
                    </Link>
                </NavbarItem>
                <NavbarItem> {/* "isActive" da applicare a NavbarItem per indicare che il kink è attivo */}
                    <Link href="#" aria-current="page" color="warning" className="font-medium">
                        Create campaign
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link color="foreground" href="#">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}

            <NavbarContent as="div" justify="end" className="">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">Profile Settings</DropdownItem>
                        <DropdownItem key="team_settings">My campaigns</DropdownItem>
                        <DropdownItem key="analytics">My contributes</DropdownItem>
                        <DropdownItem key="logout" color="warning">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <Link color="foreground" href="#" className="w-full">
                        Explore campaigns
                    </Link>
                    <Link href="#" aria-current="page" color="warning" className="font-normal">
                        Create campaign
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
}
export default Supernavbar