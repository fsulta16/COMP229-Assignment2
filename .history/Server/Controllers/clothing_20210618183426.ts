import express, { Request, Response, NextFunction } from 'express';

// import Clothing Model
import Clothing from "../Models/clothing";

//Displays Clothing List Page
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // if Error, return error otherwise displays
    Clothing.find(function(err, clothing){
        if(err)
        {
            return console.error(err);
        }    
    console.log(clothing);
    });
       
}