import express, { Request, Response, NextFunction } from 'express';

// import Contact Model
import Contact from "../Models/contact";
import { UserDisplayName } from '../Util';

//Displays Contact List Page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // goes through Contact in Mongo
    Contact.find(function(err, contactCollection){
        if(err)
        {
            return console.error(err);
        } 
        // print out contact-list to the console (need a page to do this)   
       
            //render the contact-list content partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection, displayName: UserDisplayName(req)})             
    });         
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void{
    let id = req.params.id;
    // pass the id to the database
    //db.contact.find({"_id": id})
    Contact.findById(id, {}, {}, (err, contactItemToEdit) =>
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        // show the edit view
        res.render('index',{title: 'Edit', page: 'edit', contact: contactItemToEdit, displayName: UserDisplayName(req)})             
    });         

}
// Display Create page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contact: '', displayName: UserDisplayName(req)  });
}

// Process Functions

// Process Edit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedContactItem = new Contact
    ({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    
    });
  
    // find the contact item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Contact
  let newContact = new Contact
  ({
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email,
    
  });

  // db.contact.insert({contact data is here...})
  Contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}