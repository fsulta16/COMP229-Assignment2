import express, { Request, Response, NextFunction } from 'express';

// import Clothing Model
import Contact from "../Models/contact";

//Displays Clothing List Page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // goes through Clothing in Mongo
    Contact.find(function(err, contact){
        if(err)
        {
            return console.error(err);
        } 
        // print out contact-list to the console (need a page to do this)   
        else
        {
            //res.render('contacts/list' , {title: 'Contact List' , contactList: contactList});
        }       
    
    });
    
       
}