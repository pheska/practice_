import React from 'react';
import ParksCard from './ParksCard';
import { useState, useEffect } from 'react';

function Parks() {

    const [parkData, setParkData] = useState();

    // useEffect(() => {
    //     getParkData();
    //     console.log('state', parkData)
    // })

    // function getParkData() {
    //     fetch('https://developer.nps.gov/api/v1/parks?&api_key=E7wxf3NK3huXwq9j1gMNUBfaHLUgS6KhhAnb3x6B')
    //         .then(res => res.json())
    //         .then(res => setParkData(res.data))
    //         .catch(err => console.log(err))
    // }
    // getParkData();

    useEffect(() => {
        const url = 'https://developer.nps.gov/api/v1/parks?&api_key=GaHc8pOYi3vSuUoIQ0NgDdRuswlEH0VZggkVcsko'

        const dataFetch = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.data)
                setParkData(json.data);
                console.log('parkData', parkData)
            } catch (error){
                console.log('error', error)
            };
        };
        // const dataFetch = async () => {
        //     const data = await(
        //         await fetch(`https://developer.nps.gov/api/v1/parks?&api_key=GaHc8pOYi3vSuUoIQ0NgDdRuswlEH0VZggkVcsko`)
        //     ).json();

        //     setParkData(data.data);
        // };

        dataFetch();
    }, [parkData]);

    console.log('parkData', parkData)

    const reactElements = parkData.map((park) => {
        return <ParksCard key={park.id} parkName={park.fullName}/>
    })

    return (
        <div>
            {reactElements}
        </div>
    )
};

export default Parks;


/*

useEffect(() => {
        const url = 'https://developer.nps.gov/api/v1/parks?&api_key=GaHc8pOYi3vSuUoIQ0NgDdRuswlEH0VZggkVcsko'

        const dataFetch = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.data)
                setParkData(json.data);
                console.log('parkData', parkData)
            } catch (error){
                console.log('error', error)
            };
        };
        // const dataFetch = async () => {
        //     const data = await(
        //         await fetch(`https://developer.nps.gov/api/v1/parks?&api_key=GaHc8pOYi3vSuUoIQ0NgDdRuswlEH0VZggkVcsko`)
        //     ).json();

        //     setParkData(data.data);
        // };

        dataFetch();
    });


    // fs write data array into a json file
    const dataArray = parkData.map((park) => {
        return <ParksCard key={park.id} parkName={park.fullName}/>
    })
*/