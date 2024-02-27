import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chip } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import { getCampaignData } from '../redux/actions/campaign';

const ExploreCampaign = () => {
    const dispatch = useDispatch();
    const allcampaigns = useSelector(state => state.campaign.allcampaigns);

    useEffect(() => {
        dispatch(getCampaignData());
    }, [dispatch]);

    return (
        <>
            <div className='mt-5 grid grid-cols-1 gap-5 lg:gap-8 justify-items-center mx-auto px-5 max-w-6xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {allcampaigns.map(campaign => (
                    <div key={campaign.campaignId} className='w-full max-w-96 sm:w-60 border border-gray-200 rounded-md overflow-hidden transition-all duration-500 hover:ease-out hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-0.5'>
                        <img src={campaign.campaignCover}
                            alt='campaign cover'
                            className='w-full h-60 sm:h-52 object-cover object-center'>
                        </img>
                        <div className='p-3'>
                            <Chip size="sm" color="warning" variant="flat" className="tracking-widest my-1">{campaign.category}</Chip>
                            <p className="font-mono text-2xl font-bold mb-1">{campaign.title}</p>
                            <p className='leading-5 text-sm'>{campaign.subtitle}</p>
                            <Progress
                                label=""
                                size="sm"
                                value={campaign.totalFunds}
                                maxValue={campaign.fundsTarget}
                                color="warning"
                                formatOptions={{ style: "currency", currency: "USD" }}
                                showValueLabel={false}
                                classNames={{
                                    base: "w-full mt-3",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-10"><p className="text-white">a</p></div>
        </>
    )
}

export default ExploreCampaign