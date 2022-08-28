function transformUserToDataModel(user, addresses, contacts) {
    return {
        id: user.id,
        createdAt: user.createdAt,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        
        addresses: addresses.map((address) => ({
          AddressId: address.id,
          address: `${address.street} ${address.number}`,
          country: address.country,
          city: address.city,
          state: address.state,
          zipcode: address.zipcode,
          })),

          contacts: contacts.map((contact) => ({
            contactId: contact.id,
            name: contact.name,
            phoneNumber: contact.phoneNumber,
            email: contact.email}))
      };
}

export { transformUserToDataModel }