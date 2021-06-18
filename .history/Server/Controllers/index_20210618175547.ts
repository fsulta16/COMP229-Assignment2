import express, { Request, Response, NextFunction } from 'express';
// actions taken for Home page
export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Home', page: 'home' });
}
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'About Me', page: 'about' });
}
export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Projects', page: 'project' });
}
export function DisplayServicePage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Services', page: 'service' });
}