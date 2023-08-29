export const checkvalidData = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return " Password is not valid";

  return null;
};
