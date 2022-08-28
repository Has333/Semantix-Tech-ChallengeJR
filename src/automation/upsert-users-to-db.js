import { transformUserToDBModel } from "../data-transformation/database-user.js";
import mockapiUserService from "../services/mockapi-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";
import User from "../models/User.js";

class Automation {
    async run() {
       let page = 1;
       let limit = 10;
       let hasUsers = true;

       while(hasUsers) {
        const users = await mockapiUserService.listUsers(page, limit);
        for (let user of users) {
            await sleep(1000);
            const address = await mockapiUserService.listAddressesById(user.id);
            const contacts = await mockapiUserService.listContactsById(user.id);
            const DBUserModel = transformUserToDBModel(user, address, contacts);
            
            await User.findOneAndUpdate(DBUserModel, DBUserModel, {
                new: true,
                upsert: true
            });  
        }
        hasUsers = users.length === limit
        page++
       }
        return
    }
}

export default new Automation();