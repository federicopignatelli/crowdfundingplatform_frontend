import React from "react"
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContributionData } from "../redux/actions/contribution";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";




const Mycontributes = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.data.userId)

    const allContributions = useSelector(state => state.contribution.allcontributions);

    const contributioListByUserId = useMemo(() => {
        return allContributions.filter(contribution => contribution.userId.userId === userId);
    }, [allContributions, userId]);

    console.log("contribution list" + contributioListByUserId)

    useEffect(() => {
        dispatch(getContributionData());
    }, [dispatch]);


    return (
        <>


            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <p className="font-mono font-bold text-4xl">My contributes</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn className="font-bold tracking-wider">DATE & TIME</TableColumn>
                        <TableColumn className="font-bold tracking-wider">AMOUNT</TableColumn>
                        <TableColumn className="font-bold tracking-wider">CAMPAIGN</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {contributioListByUserId.map(contribution => (
                            <TableRow key="contribution.contributionId">
                                <TableCell>
                                    <span><p><span className="font-bold">date: </span>{contribution.emissionDate}</p></span>
                                    <span><p><span className="font-bold">time: </span>{contribution.emissionTime ?
                                        contribution.emissionTime.split(':').slice(0, 2).join(':') :
                                        "N/A"
                                    }</p></span>
                                </TableCell>

                                <TableCell>{contribution.amount} $</TableCell>

                                <TableCell>
                                    <p><span className="font-bold">Title: </span>{contribution.campaign.title}</p>
                                    <p><span className="font-bold">Subtitle: </span>{contribution.campaign.subtitle}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </>
    )
}

export default Mycontributes