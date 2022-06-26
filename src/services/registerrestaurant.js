import GenericService from "./GenericService";
class RestaurantService extends GenericService {
    constructor() {
      super();
    }

    login = (username, password) =>
    new Promise((resolve, reject) => {
      this.post("users/restlogin", { username, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token); 
        })
        .catch((err) => {
          reject(err);
        });
    });

    register = (name,phone,address,cuisine,services,photo,email,username,password) =>
    this.post("resturnants", { name,phone,address,cuisine,services,photo,email,username,password});
    getsingleres=(id)=>this.get("resturnants/"+id);
    // getsingle=(id)=>this.get("addfarmer/"+id);
    // deletefarmer=(id)=>this.delete("addfarmer/"+id);
    // updatefarmer=(id,data)=>this.put("addfarmer/"+id,data);

}
let restaurantService = new RestaurantService();
export default restaurantService;