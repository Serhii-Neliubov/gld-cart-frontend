import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error';
import TokenService from '../services/token-service';

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authorizationHeader = req.headers.authorization as string;

  if (!authorizationHeader) {
    return next(ApiError.UnauthorizedError());
  }

  const accessToken = authorizationHeader.split(' ')[1];

  if (!accessToken) {
    return next(ApiError.UnauthorizedError());
  }

  const userData = TokenService.validateAccessToken(accessToken);

  if (!userData) {
    return next(ApiError.UnauthorizedError());
  }
  // req.user = userData;
  next();
};
