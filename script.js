const userProfile = {
    userName: 'David Akinola',
    email: 'dakinola54@gmail.com',
    password: 123456,
    profilePicture: 'dave.jpeg',

    changePawword: function(newPassword) {
        this.password = newPassword
    },

    changeProgilePicture: function(newPhoto) {
        this.profilePicture = newPhoto
    }
}