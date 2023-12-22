import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const rateLimitOptions = {
    windowMs: 15 * 60 * 1000,
    max: 1,
    message: 'You have exceeded your 5 requests per minute limit.',
    headers: true,
};

const rateLimitMiddleware = rateLimit(rateLimitOptions);

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export const rateLimitMiddlewareTyped: MiddlewareFunction = rateLimitMiddleware;
