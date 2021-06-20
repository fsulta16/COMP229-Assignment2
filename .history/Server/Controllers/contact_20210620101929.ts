import express, { Request, Response, NextFunction } from 'express';

// import Clothing Model
import Contact from "../Models/contact";

//Displays Clothing List Page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // goes through Clothing in Mongo
    Contact.find(function(err, contactCollection){
        if(err)
        {
            return console.error(err);
        } 
        // print out contact-list to the console (need a page to do this)   
       
            //render the contact-list content partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection})             
    });         
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;
    // pass the id to the database
    //db.contact.find({"_id": id})
}