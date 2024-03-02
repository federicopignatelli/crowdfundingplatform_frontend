import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCampaignData } from '../redux/actions/campaign';

import iconcard from '../icons/logo.png'
import { Link } from 'react-router-dom';
import { Chip, Tooltip, Divider, Progress, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { EditIcon } from "../icons/EditIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EyeIcon } from "../icons/Eyeicon";


const Mycampaigns = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedFile, setSelectedFile] = useState(null);

    const [selectedCampaignId, setSelectedCampaignId] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const userId = useSelector(state => state.user.data.userId);

    const myCampaigns = useSelector(state =>
        state.campaign.allcampaigns.filter(campaign => campaign.userId.userId === userId));

    useEffect(() => {
        dispatch(getCampaignData());
    }, [dispatch]);

    const handleSubmitCover = async () => {
        if (!selectedFile) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`http://localhost:4003/campaign/uploadcover/${selectedCampaignId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData,
            });

            if (response.ok) {

                dispatch(getCampaignData())

            } else {
                const data = await response.json();
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while uploading the cover.");
        }

    };


    return (
        <>
            <div className='mt-5 grid grid-cols-1 gap-5 lg:gap-8 justify-items-center mx-auto px-5 max-w-6xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {myCampaigns && myCampaigns.map(campaign => (
                    <div key={campaign.campaignId} className='w-full max-w-96 border border-gray-200 rounded-md overflow-hidden'>

                        {
                            campaign.campaignCover ? (
                                <img src={campaign.campaignCover}
                                    alt='campaign cover'
                                    className='w-full h-60 sm:h-52 object-cover object-center'>
                                </img>
                            ) : (
                                <img src={iconcard}
                                    alt='campaign cover'
                                    className='w-full h-60 sm:h-52 object-cover object-center'>
                                </img>
                            )
                        }
                        <div className='p-3'>
                            <Chip size="sm" color="warning" variant="flat" className="tracking-widest my-1">{campaign.category}</Chip>
                            <p className="font-mono text-2xl font-bold mb-1">{campaign.title}</p>
                            <p className='leading-5 text-sm'>{campaign.subtitle}</p>
                            <Progress
                                aria-label="Progresso della campagna"
                                label=""
                                size="md"
                                value={campaign.totalFunds}
                                maxValue={campaign.fundsTarget}
                                color="warning"
                                formatOptions={{ style: "currency", currency: "USD" }}
                                showValueLabel={true}
                                classNames={{
                                    base: "w-full mt-3",
                                }}
                            />
                        </div>


                        <Divider className="my-2" />


                        <div className="flex flex-row justify-center gap-8 py-3">
                            <Tooltip content="See Campaign">
                                <span className="text-3xl text-default-600 cursor-pointer active:opacity-50">
                                    <EyeIcon />
                                </span>
                            </Tooltip>
                            <Tooltip content="Edit Campaign">
                                <span className="text-3xl text-default-600 cursor-pointer active:opacity-50">
                                    <EditIcon />
                                </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete Campaign">
                                <span className="text-3xl text-danger cursor-pointer active:opacity-50">
                                    <DeleteIcon />
                                </span>
                            </Tooltip>
                        </div>
                        <div>
                            <div className="mt-2 mb-4 px-4">
                                <Button color="warning" variant="ghost" className="w-full text-xl" size="lg"
                                    onClick={() => {
                                        setSelectedCampaignId(campaign.campaignId);
                                        onOpen();
                                    }}
                                >
                                    Change Cover
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Upload cover picture</ModalHeader>
                            <ModalBody>
                                <div className="mt-5">
                                    <input type="file" className="block w-full text-gray-500 border-2 border-gray rounded-xl py-3 px-3"
                                        accept="image/*"
                                        name="cover"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="deafult" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="warning" onPress={onClose} onClick={handleSubmitCover}>
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )

}

export default Mycampaigns