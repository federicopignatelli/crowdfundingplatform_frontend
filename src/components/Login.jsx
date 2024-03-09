import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions'
import { useNavigate } from "react-router-dom";
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { Input, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";




const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const error = useSelector((state) => state.user.error);
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    useEffect(() => {
        if (error === 'user not found' || error === 'Login failed') {
            onOpen()
        }
    }, [error, onOpen])


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
    }


    const goToHome = () => {
        navigate('/')
    }

    const goToProfile = () => {
        navigate('/profile')
    }

    if (isLoggedIn) {
        goToProfile()
    }


    const toggleVisibility = () => setIsVisible(!isVisible)

    return (
        <>
            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <p className="font-mono font-bold text-4xl">Login</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">

                <label className="block text-gray-700  font-bold mb-2">
                    Insert your data
                </label>

                <Input type="email" variant="bordered" label="Email" placeholder="Enter your mail" className="mt-4"
                    isRequired
                    value={email}
                    onChange={e =>
                        setEmail(e.target.value)}
                />

                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="mt-4"
                    isRequired
                    value={password}
                    onChange={e =>
                        setPassword(e.target.value)}
                />

                <div className="flex flex-col mt-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
                    <Button color="default" variant="flat" className="sm:w-1/2" onClick={(goToHome)}>
                        Go back <ArrowLongLeftIcon className="text-black w-6 h-6"></ArrowLongLeftIcon>
                    </Button>
                    <Button color="warning" variant="solid" className="sm:w-1/2 font-semibold text-base"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>


                <Modal isOpen={isOpen} onClose={onClose} placement="center" className="m-5" backdrop="blur">
                    <ModalContent>
                        <>
                            <ModalHeader className="flex flex-col gap-1">Error Message</ModalHeader>
                            <ModalBody>
                                <p>
                                    User not found. Please try again.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="warning" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>

            </div>
            <div className="my-80"><p className="text-white">a</p></div>

        </>
    )
}

export default Login;