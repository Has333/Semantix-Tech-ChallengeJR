import axios from "axios";
import "dotenv/config.js";

const apiURL = process.env.API_URL;

class MockapiUserService {
    async listUsers(page, limit) {
     const { data: usersData } = await axios.get(`${apiURL}/users?page=${page}&limit=${limit}`);

     return usersData
    }

    async listAddressesById(id) {
        const { data: userAddresses }  = await axios.get(`${apiURL}/users/${id}/address`);

        return userAddresses
    }
    

    async listContactsById(id) {
        const { data: userContacts } = await axios.get(`${apiURL}/users/${id}/contacts`);
    
            return userContacts
    }

    async listUsersAmount() {
        const { data: [ usersAmount ] } = await axios.get(`${apiURL}/users?sortBy=id&order=desc`);

        return usersAmount.id
    }

    async listUserById(id) {
        const { data: user } = await axios.get(`${apiURL}/users/${id}`);

        return user
    }
}

export default new MockapiUserService();