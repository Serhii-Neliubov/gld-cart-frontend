import {Response, Request} from 'express';
import ApiError from '../exceptions/api-error';

export default function errorHandler(err: Error, req: Request, res: Response
) {
    console.log(err);
    if (err instanceof ApiError) {
        const apiError = err as ApiError;

        return res.status(apiError.status).json({
            message: apiError.message,
            errors: apiError.errors,
        });
    }
    return res.status(500).json({message: 'Undefined server error'});
}
