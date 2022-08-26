import { transformUserToDataModel } from "../data-transformation/mockapi-user.js";
import { sleep } from "../helpers/Sleep.helper.js";
import axios from "axios";
import "dotenv/config.js";
const apiURL = process.env.API_URL;

class usersController {
  async listAll (req, res) {
    try {
      const page = req.query.page   || 1;
      const limit = req.query.limit || 10;

      const completeUsersModel = [];
      const users = (await axios.get(`${apiURL}/users?page=${page}&limit=${limit}`)).data;

      for (let user of users) {
        await sleep(1000);
        const addresses = (await axios.get(`${apiURL}/users/${user.id}/address`)).data;
        const contacts =  (await axios.get(`${apiURL}/users/${user.id}/contacts`)).data;
        
        completeUsersModel.push(transformUserToDataModel(user, addresses, contacts));
      }
      return res.status(200).json(completeUsersModel);

    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new usersController();
