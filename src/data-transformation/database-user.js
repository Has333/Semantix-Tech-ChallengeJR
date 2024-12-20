function transformUserToDBModel(user, addresses, contacts) {
   const [ address ] = addresses;
   const [ contact ] = contacts;    

    return {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,

      address: address ? address.street : "Unavailable",
      addressNumber: address ? address.number : "Unavailable",
      
      phoneNumber: contact ? contact.phoneNumber : "Unavailable",
      
      };
}

export { transformUserToDBModel }




