const userProfile = {
    userName: 'David Akinola',
    email: 'dakinola54@gmail.com',
    password: 123456,
    profilePicture: 'dave.jpeg',

    changePassword: function(newPassword) {
        this.password = newPassword
    },

    changeProfilePicture: function(newPhoto) {
        this.profilePicture = newPhoto
    }
};

console.log(userProfile)  //outputs initial object

userProfile.changePassword(56789);     //changes password
userProfile.changeProfilePicture('new.jpeg');  //changes profile photo 

console.log(userProfile); //outputs new object





//BANKING

const bankingAccount = {
    accountNumber: 1234567899,
    balance: 2500,
    teansactionHistory: '',

    withdrawFund: function(amount) {
        this.balance -= amount
    }

    

}

console.log(bankingAccount);

bankingAccount.withdrawFund(1000);

console.log(bankingAccount);
