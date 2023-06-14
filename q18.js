const getUserData = (callback) => {
  var user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
  };

  setTimeout(() => {
    callback(user);
  }, 2000);
};

const callback = (user) => {
  console.log(user);
};

getUserData(callback);
