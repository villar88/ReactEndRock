import http from "../http-common"

class ApiService {
  getAll() {
    return http.get("/products");
  }
  get(id) {
    return http.get(`/products/${id}`);
  }
  getAllHome() {
    return http.get("/products?limit=4");
  }

  getCart() {
    return http.get("/carts/1");
  }

  updateCart(data) {
    return http.put(`/carts/1`,data);
  }
  
}
export default new ApiService();