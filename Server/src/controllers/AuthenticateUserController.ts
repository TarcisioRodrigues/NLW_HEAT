import { Response, Request } from 'express';
import { AuthenticateUserServices } from '../services/AuthenticateUserService';
class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticateUserServices();
    try {
      const result = await service.execute(code)
      return response.json(result);  
    } catch (error) {
      return response.json(error.message)
      
    }
    
    

    
  }
}

export { AuthenticateUserController };
