import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Progress } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import coverplaceholder from '../icons/logoxl.png'




const Campaign = () => {

    const { campaignId } = useParams();
    const singleCampaignData = useSelector(state =>
        state.campaign.allcampaigns.find(campaign => campaign.campaignId === campaignId));

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


                <img
                    className="w-full h-full object-cover object-center"
                    src={singleCampaignData.campaignCover}
                    alt="Immagine di copertina"
                />

            </div>
            <div className="container mx-auto justify-items-center px-4 mt-3 max-w-5xl flex flex-col sm:flex-row gap-x-8">
                <div className="basis-3/5 ">
                    <Chip size="sm" color="warning" variant="flat" className="tracking-widest my-2">{singleCampaignData.category}</Chip>
                    <p className="font-mono text-5xl font-bold mb-2">{singleCampaignData.title}</p>
                    <p className="font-sans text-lg font-normal italic leading-5 mb-2 max-w-md">
                        {singleCampaignData.subtitle}
                    </p>
                    <p className="text-sm mb-5 text-right sm:text-left text-gray-500"> Created on {singleCampaignData.startDate}</p>

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
                    <p className="text-xs mt-2 sm:text-base">Funds necessary to carry out the project: ${singleCampaignData.fundsTarget}</p>
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
                </div>

            </div>
            <div className="my-10"><p className="text-white">a</p></div>


        </>
    )
};

export default Campaign