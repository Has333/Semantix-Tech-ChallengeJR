import axios from "axios";
import "dotenv/config.js";

const apiHOST = process.env.API_HOST;
const apiURL = `https://${apiHOST}.mockapi.io/api/v1`;

class apiUserService {
  async listAll() {
    try {
      const usersDataResponse = await axios.get(`${apiURL}/users`);
      const usersData = usersDataResponse.data;
      return usersData;
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  }

  async listUserAddress(user) {
    try {
      const userAddressResponse = await axios.get(`${apiURL}/${user.id}/address`);
      const userAddress = userAddressResponse.data;
      return userAddress;
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  }

  async listUserContacts(user) {
    try {
      const userContactResponse = await axios.get(`${apiURL}/${user.id}/contacts`);
      const userContact = userContactResponse.data;
      return userContact;
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  }
}

export default new apiUserService();
