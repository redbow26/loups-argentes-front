export function auth() {
  const login = async () => {
    window.location.href = "http://localhost:3000/api/auth/login";
  };
  const logout = async () => {
    window.location.href = "http://localhost:3000/api/auth/logout";
  };

  return { login, logout };
}
