import { transformUserToDataModel } from "../data-transformation/mockapi-user.js";
import mockapiUserService from "../services/mockapi-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";

class UsersController {
  async listAll (req, res) {
    try {
      const page = req.query.page   || 1;
      const limit = req.query.limit || 10;

      const completeUsersModel = [];
      const users = await mockapiUserService.listUsers(page, limit);

      for (let user of users) {
        await sleep(1000);
        const addresses = await mockapiUserService.listAddressesById(user.id);
        const contacts = await mockapiUserService.listContactsById(user.id);
        
        completeUsersModel.push(transformUserToDataModel(user, addresses, contacts));
      }
      return res.status(200).json(completeUsersModel);

    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new UsersController();
