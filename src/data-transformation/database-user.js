function transformUserToDBModel(user, addresses, contacts) {

    const userModel = {
      fullName: user.firstName + ' ' + user.lastName,
      email: user.email,

      address: addresses[0].street,
      addressNumber: addresses[0].number,
      
      phoneNumber: contacts[0].phoneNumber,
      
      };
     
      return userModel
}

export { transformUserToDBModel }




