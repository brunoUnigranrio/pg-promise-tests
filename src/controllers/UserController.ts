import UserRepository from "repositories/UserRepository";

export default class UserController {
    static listAll = async (req: Request, res: Response) => {

    }

    static init = async (req: Request, res: Response) => {
        const userRepository = new UserRepository();
        console.log("RUNNING INIT")
        await userRepository.init();

    }
}