import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import avatardefault from "../icons/avatarplaceholder.png"

const Supernavbar = () => {

    const userData = useSelector(state => state.user.data);

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.assign('http://localhost:3000/')
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/registration')
    }

    const goToMyContribute = () => {
        navigate('/mycontribute')
    }

    const goToLogin = () => {
        navigate('/login')
    }

    const goToProfile = () => {
        navigate('/profile')
    }

    const goToHome = () => {
        navigate('/')
    }

    const goToCreateCampaign = () => {
        navigate('/createcampaign')
    }

    const goToExploreCampaign = () => {
        navigate('/explorecampaign')
    }

    const goToMyCampaigns = () => {
        navigate('/mycampaigns')
    }

    return (
        <Navbar isBordered
            shouldHideOnScroll
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarBrand onClick={goToHome}>
                    {/* <AcmeLogo /> */}
                    <p className="font-mono text-2xl cursor-pointer">TechFunds</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand onClick={goToHome}>
                    {/* <AcmeLogo /> */}
                    <p className="font-mono text-2xl cursor-pointer">TechFunds</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#" onClick={goToExploreCampaign}>
                        Explore projects
                    </Link>
                </NavbarItem>
                {isLoggedIn ? (<NavbarItem>
                    <Link href="#" aria-current="page" color="warning" className="font-medium" onClick={goToCreateCampaign}>
                        Create campaign
                    </Link>
                </NavbarItem>) : (null)}

            </NavbarContent>

            {isLoggedIn ? (
                <NavbarContent as="div" justify="end" className="">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="warning"
                                name={userData.name}
                                src={userData.profilepic ? userData.profilepic : avatardefault}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" textValue="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2" textValue="Profile">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{userData.email}</p>
                            </DropdownItem>
                            <DropdownItem key="profilepages" onClick={goToProfile} textValue="Profile">Profile</DropdownItem>
                            <DropdownItem key="mycampaigns" onClick={goToMyCampaigns} textValue="My campaigns">My campaigns</DropdownItem>
                            <DropdownItem key="mycontributes" textValue="My contributes" onClick={goToMyContribute}>My contributes</DropdownItem>
                            <DropdownItem key="logout" color="warning" textValue="Log Out" onClick={handleLogOut}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            ) : (
                <NavbarContent justify="end">
                    <NavbarItem className="lg:flex">
                        <Link color="foreground" href="#" onClick={goToLogin}>
                            Login
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="warning" href="#" variant="flat" radius="sm" onClick={goToRegister}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            )}

            <NavbarMenu textValue="drop list menu" onClick={handleCloseMenu}>
                <NavbarMenuItem textValue="Explore campaigns">
                    <Link color="foreground" href="#" className="w-full" textValue="explore campaign link"
                        onClick={() => {
                            goToExploreCampaign();
                            handleCloseMenu();
                        }}>
                        Explore projects
                    </Link>
                </NavbarMenuItem>
                {isLoggedIn ? (
                    <NavbarMenuItem textValue="Create campaign">
                        <Link href="#" aria-current="page" color="warning" className="font-normal" textValue="link create campaign"
                            onClick={() => {
                                goToCreateCampaign();
                                handleCloseMenu();
                            }}>
                            Create campaign
                        </Link>
                    </NavbarMenuItem>
                ) : (null)}
            </NavbarMenu>
        </Navbar>
    );
}
export default Supernavbar