import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  // Extract the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1] as string; 

  // Decode the JWT token
  const jwtToken = jwt.decode(token);

  // Check if the JWT token was decoded successfully
  if(jwtToken) {
  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || ''; 

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    // Handle token verification errors
    if (err) {
      return res.sendStatus(403); // Forbidden access
    }
    // Attach the decoded user information to the request object
    req.user = decoded as JwtPayload; 

    // Proceed to the next middleware or route handler
    return next(); 
  });
}


};
