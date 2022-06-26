import GenericService from "./GenericService";
class itemService extends GenericService {
    constructor() {
      super();
    }

    allitems=()=>this.get("items")
    register = (name,phone,address,cuisine,services,photo,email,username,password) =>
    this.post("resturnants", { name,phone,address,cuisine,services,photo,email,username,password});
    getsingleres=(id)=>this.get("resturnants/"+id);
    // getsingle=(id)=>this.get("addfarmer/"+id);
    // deletefarmer=(id)=>this.delete("addfarmer/"+id);
    // updatefarmer=(id,data)=>this.put("addfarmer/"+id,data);

}
let ItemService = new itemService();
export default ItemService;