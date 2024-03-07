import React from "react";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampaignData } from '../redux/actions/campaign';
import { getContributionData } from "../redux/actions/contribution";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, User, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Chip, Button, Progress } from "@nextui-org/react";
import coverplaceholder from '../icons/logoxl.png'

const Campaign = () => {
    const dispatch = useDispatch();

    const { campaignId } = useParams();
    const singleCampaignData = useSelector(state => state.campaign.allcampaigns.find(campaign => campaign.campaignId === campaignId));
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)


    //CONTRIBUTION
    const [formData, setFormData] = useState({
        amount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const token = localStorage.getItem('token');

    const handleSubmitContribution = async () => {

        try {
            const response = await fetch(`http://localhost:4003/contribution/create/${campaignId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                dispatch(getContributionData());

                dispatch(getCampaignData());

            } else {
                const data = await response.json();
                alert("Error: " + data.message);
            }

        } catch (error) {
            console.error('Error saving contribute:', error.message);

        }
    };

    //CONTRIBUTION LIST

    const allContributions = useSelector(state => state.contribution.allcontributions);


    const contributioListByCampaignId = useMemo(() => {
        const filteredContributions = allContributions.filter(contribution => contribution.campaign.campaignId === campaignId);
        return filteredContributions.slice(0, 5);
    }, [allContributions, campaignId]);


    console.log("contribution list" + contributioListByCampaignId)

    useEffect(() => {

        dispatch(getContributionData());
        dispatch(getCampaignData());

    }, [dispatch]);




    return (
        <>
            <div className="relative overflow-hidden" style={{ height: '500px' }}>
                {
                    singleCampaignData && singleCampaignData.campaignCover ? (
                        <img
                            className="w-full h-full object-cover object-center"
                            src={singleCampaignData.campaignCover}
                            alt="Immagine di copertina"
                        />
                    ) : (
                        <img
                            className="w-full h-full object-cover object-center"
                            src={coverplaceholder}
                            alt="Immagine di copertina"
                        />
                    )
                }




            </div>
            <div className="container mx-auto max-w-sm px-4 mt-3 sm:max-w-5xl flex flex-col justify-center justify-items-center sm:flex-row gap-x-8">

                <div className="basis-3/5 ">
                    <Chip size="lg" color="warning" variant="flat" className="tracking-widest my-5">{singleCampaignData.category}</Chip>
                    <p className="font-mono text-5xl font-bold mb-2">{singleCampaignData.title}</p>
                    <p className="font-sans text-xl font-normal italic leading-7 mt-6 mb-2 max-w-md">
                        {singleCampaignData.subtitle}
                    </p>
                    <div className=" max-w-md">
                        <p className="text-sm mb-7 text-right sm:text-left text-gray-500"> Created on {singleCampaignData.startDate}</p>
                    </div>
                    <div className="">
                        <Progress
                            label="Funds received"
                            size="sm"
                            value={singleCampaignData.totalFunds}
                            maxValue={singleCampaignData.fundsTarget}
                            color="warning"
                            formatOptions={{ style: "currency", currency: "USD" }}
                            showValueLabel={true}
                            classNames={{
                                label: "font-medium sm:text-base",
                                value: "font-medium sm:text-base",
                                base: "max-w-md",
                            }}
                        />
                    </div>
                    <p className="text-xs mt-1 sm:text-base">Funds necessary to carry out the project: ${singleCampaignData.fundsTarget}</p>
                    <Table aria-label="contribution list" className="max-w-md mt-6">
                        <TableHeader>
                            <TableColumn>NAME</TableColumn>
                            <TableColumn>AMOUNT</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {contributioListByCampaignId.map(contribution => (
                                <TableRow key={contribution.contributionId}>
                                    <TableCell>{contribution.userId.name}</TableCell>
                                    <TableCell>{contribution.amount} $</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </div>

                <div className="mt-5 sm:mt-10 basis-2/5 ">
                    <p className="text-lg sm:text-xl font-mono  font-bold">Description:</p>
                    <p className="leading-5 text-sm sm:text-base mb-4">
                        {singleCampaignData.description}
                    </p>
                    <User
                        name={singleCampaignData.userId.name}
                        description="Project creator"
                        avatarProps={{
                            src: singleCampaignData.userId.profilepic
                        }}
                    />
                    {isLoggedIn ? (
                        <div>
                            <Button radius="full" size="lg" className="bg-gradient-to-tr from-amber-400 to-orange-500 text-white my-3"
                                onPress={onOpen}
                            >
                                <p className="font-sans text-base tracking-widest">Support this project </p>
                            </Button>
                        </div>
                    ) : (null)}
                </div>
            </div>


            <Modal isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                placement="center"
                className="absolute top-20"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    If you want to contribute to this project send the desired amount of money, thank you!.
                                </p>
                                <Input
                                    onChange={handleInputChange}
                                    value={formData.amount}
                                    name="amount"
                                    type="number"
                                    label="Amount"
                                    placeholder="0.00"
                                    variant="bordered"
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">$</span>
                                        </div>
                                    }
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="deafult" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="warning" onPress={onClose} onClick={handleSubmitContribution}>
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <div className="my-10"><p className="text-white">a</p></div>


        </>
    )

};




export default Campaign