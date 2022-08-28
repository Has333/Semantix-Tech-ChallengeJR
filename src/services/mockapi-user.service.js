import axios from "axios";
import "dotenv/config.js";

const apiURL = process.env.API_URL;

class MockapiUserService {
    async listAll(page, limit) {
     const usersData = await axios.get(`${apiURL}/users?page=${page}&limit=${limit}`)
     const users = usersData.data;

     return users
    }

    async userAddresses(id) {
        const userAddresses = await axios.get(`${apiURL}/users/${id}/address`);
        const addresses = userAddresses.data;
        const unavailable = {
            street: "Unavailable",
            number: "Unavailable"
        }
         addresses.push(unavailable);

        return addresses
    }
    

    async userContacts(id) {
        const userContacts = await axios.get(`${apiURL}/users/${id}/contacts`);
        const contacts = userContacts.data;

        return contacts
    }

    async usersAmount() {
        const usersAmount = await axios.get(`${apiURL}/users?sortBy=id&order=desc`)
         const users = usersAmount.data;

        return users[0].id
    }

    async listUserById(id) {
        const userId = await axios.get(`${apiURL}/users/${id}`);
        const user = userId.data;

        return user
    }
}

export default new MockapiUserService();