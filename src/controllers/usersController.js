import { transformUserToDataModel } from "../data-transformation/mockapi-user.js";
import apiUserService from "../services/api-user.service.js";
import { sleep } from "../helpers/Sleep.helper.js";

class usersController {
  async listUsers(req, res) {
    const usersData = apiUserService.listAll();
    const users = [];

    try {
      usersData.then((userData) => {
        for (let user of userData) {
          sleep(1000);

          users.push(transformUserToDataModel(user));
        }
        return res.status(200).json(users);
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new usersController();
