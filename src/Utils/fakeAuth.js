const users = [
  {
    email: "admin@test.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "user@test.com",
    password: "user123",
    role: "user",
  },
];

export function login(email, password) {
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    user: {
      email: foundUser.email,
      role: foundUser.role,
    },
  };
}
