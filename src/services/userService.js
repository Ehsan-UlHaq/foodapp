import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  login = (username, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { username, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token); 
        })
        .catch((err) => {
          reject(err);
        });
    });
    adduser=(username,password,role)=>this.post("users/",{username,password,role})
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role ==="admin") return true;
      else return false;
    } else return false;
  };
  isSeller = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role ==="seller") return true;
      else return false;
    } else return false;
  };
  isFarmerorSupplier = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "farmer"||this.getLoggedInUser().role==="supplier") return true;
      else return false;
    } else return false;
  };
  isCustomer = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "customer") return true;
      else return false;
    } else return false;
  };
  isnotadmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role !== "admin") return true;
      else return false;
    } else return false;
  };
}

let userService = new UserService();
export default userService;