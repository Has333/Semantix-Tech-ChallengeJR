import { transformUserToDBModel } from "../data-transformation/database-user.js";
import mockapiUserService from "../services/mockapi-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";
import User from "../models/User.js";

class Automation {
    async run() {
        let usersAmount = await mockapiUserService.listUsersAmount();
        let currentUser = 1; 

        for (currentUser; currentUser < usersAmount; currentUser++) {
            await sleep(3000);
            const user = await mockapiUserService.listUserById(currentUser);
            const addresses = await mockapiUserService.listAddressesById(user.id);
            const contacts = await mockapiUserService.listContactsById(user.id);
            
            const DBUserModel = transformUserToDBModel(user, addresses, contacts);
            console.log(DBUserModel);

            await User.findOneAndUpdate(DBUserModel, DBUserModel, {
                new: true,
                upsert: true
            });
            
            
        }
        return
    }
}

export default new Automation();