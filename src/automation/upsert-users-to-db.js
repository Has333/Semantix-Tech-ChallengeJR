import { transformUserToDBModel } from "../data-transformation/database-user.js";
import mockapiUserService from "../services/mockapi-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";
import User from "../models/User.js";

class Automation {
    async run() {
        let usersAmount = await mockapiUserService.usersAmount();
        let currentUser = 1; 

        for (currentUser; currentUser < usersAmount; currentUser++) {
            await sleep(3000);
            const user = await mockapiUserService.listUserById(currentUser);
            const addresses = await mockapiUserService.userAddresses(user.id);
            const contacts = await mockapiUserService.userContacts(user.id);
            
            const DBUserModel = transformUserToDBModel(user, addresses, contacts);

            await User.findOneAndUpdate(DBUserModel, DBUserModel, {
                new: true,
                upsert: true
            });
            
        }
        return
    }
}

export default new Automation();