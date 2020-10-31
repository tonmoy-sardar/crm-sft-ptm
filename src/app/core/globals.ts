'use strict';

export const itemPerPage: number = 10;
export const paginationMaxSize: number = 5; 
export const baseUrl: string = 'https://shyamsteel.tech/';
export const itemPerPageNumList:any = [10,20,30,50,100];
export const pageSize: number = 10; 

export const choiceFileds:any = {
    leadStatus:[
    // {
    //     id: 1,
    //     name: 'Not Contacted'
    // },
    {
        id:2,
        name:'Contacted'
    },
    {
        id:3,
        name:'Qualified'
    },
    {
        id:4,
        name:'Not Qualified'
    },
    {
        id:5,
        name:'Junk'
    }
    ],
    leadEngagement:[
        {
            id: 1,
            name: 'Fixed Cost'
        },
        {
            id: 2,
            name: 'Time and Material'
        },
        {
            id: 3,
            name: 'Dadicated Hiring'
        },
    ]
}