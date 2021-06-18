import express, { Request, Response, NextFunction } from 'express';
// actions taken for Home page
export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Home', page: 'home' });
}
// actions taken for About page
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'About Me', page: 'about' });
}
// actions taken for Projects page
export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Projects', page: 'project' });
}
// actions taken for Service page
export function DisplayServicePage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Services', page: 'service' });
}
// actions taken for Contact page
export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Contact', page: 'contact' });
}