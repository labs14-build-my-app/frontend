const initialState = {
  isLoading: true,
  fetch: false,
  error: false,
  isToken: false,
  isSignedIn: false,
  isNewUser: false,
  role: "",
  location: "/home",
  user: {
    id: null,
    firstName: "",
    lastName: "",
    profilePictureURL: "",
    email: "",
    userSocialMedia: {
      linkedIn: "",
      twitter: "",
      github: ""
    }
  }
};

export default initialState;
