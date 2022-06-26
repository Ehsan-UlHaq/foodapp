import GenericService from "./GenericService";
class itemService extends GenericService {
    constructor() {
      super();
    }

    allitems=()=>this.get("items")
    additem = (name,photo,price,restaurantid) =>
    this.post("items", {name,photo,price,restaurantid});
    getsingleres=(id)=>this.get("resturnants/"+id);
    // getsingle=(id)=>this.get("addfarmer/"+id);
    // deletefarmer=(id)=>this.delete("addfarmer/"+id);
    // updatefarmer=(id,data)=>this.put("addfarmer/"+id,data);

}
let ItemService = new itemService();
export default ItemService;