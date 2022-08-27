import mockapiUserService from "../services/mockapi-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";
import User from "../models/User.js";

class Automation {
    async run() {
        let usersAmount = await mockapiUserService.usersAmount();
        let currentUser = 1; 

        for (currentUser; currentUser <= usersAmount; currentUser++) {
            await sleep(1000);
            const user = mockapiUserService.listUserById(currentUser);
            
        }
    }
}

export default new Automation();