import { transformUserToDataModel } from "../data-transformation/mockapi-user.js";
import { sleep } from "../helpers/Sleep.helper.js";
import axios from "axios";
import "dotenv/config.js";

const apiURL = process.env.API_URL;
class usersController{
  async listUsers(req, res){
    try{
      const usersData = (await axios.get(`${apiURL}/users`)).data;
      const users = [];

      for(let user of usersData){
        await sleep(1000);
        const addresses = (await axios.get(`${apiURL}/users/${user.id}/address`)).data;
        const contacts =  (await axios.get(`${apiURL}/users/${user.id}/contacts`)).data;

        users.push(transformUserToDataModel(user, addresses, contacts));
        console.log(users)
      }
      return res.status(200).json(users);

    }catch (err){
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new usersController();
