function transformUserToDBModel(user) {
    const userModel = {
      fullName: user.firstName + ' ' + user.lastName,
      email: user.email,
      address: user.street,
      addressNumber: user.number,
      phoneNumber: user.phoneNumber
      };
      return userModel
}

export { transformUserToDBModel }