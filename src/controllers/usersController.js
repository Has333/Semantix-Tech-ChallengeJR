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

      const users = (await axios.get(`${apiURL}/users?page=${page}&limit=${limit}`)
      .catch(err => res.status(404).json({message: err.message}))).data;

      for (let user of users) {
        await sleep(1000);
        const addresses = (await axios.get(`${apiURL}/users/${user.id}/address`)
        .catch(err => res.status(404).json({message: err.message}))).data;

        const contacts =  (await axios.get(`${apiURL}/users/${user.id}/contacts`)
        .catch(err => res.status(404).json({message: err.message}))).data;
        
        completeUsersModel.push(transformUserToDataModel(user, addresses, contacts));
      }
      return res.status(200).json(completeUsersModel);

    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new usersController();
