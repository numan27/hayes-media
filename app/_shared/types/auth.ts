type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  address: string;
  phone: string;
};

type CreatePasswordType = {
  password: string;
  confirmPassword: string;
};

type UpdatePasswordType = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

type CreateListingType = {
  category: string;
  location: string;
  zipCode: string;
  partNumber: string;
  year: string;
  makeBrand: string;
  model: string;
  condition: string;
  title: string;
  price: string;
};
type EditListingType = {
  category: string;
  location: string;
  zipCode: string;
  partNumber: string;
  year: string;
  makeBrand: string;
  model: string;
  condition: string;
  title: string;
  price: string;
  stock: string;
};

type UpdateProfileType = {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  // profilePic: any;
};
