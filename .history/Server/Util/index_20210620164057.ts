// index.ts, Farishta Sultani, 301079757,June 18, 2021 
import express, { Request, Response, NextFunction } from 'express';

import * as DBConfig from '../Config/db';
// Display name 
export function UserDisplayName(req: Request): string
{
    // if there is a user
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}
// users cannot access pages unless authenticated
export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}