import User from "../../Model/User";
import HttpClient from "../HttpClient/HttpClient";
import LoginResponse from '../LoginResponse';

export default class UserApi extends HttpClient {
  private static classInstance?: UserApi;

  public constructor() {
    super("http://localhost:8080/api");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UserApi();
    }
    return this.classInstance;
  }

  public login = (formData: FormData) => {
    return this.instance.post<LoginResponse<User>, LoginResponse<User>>('/login', formData);
  };

}
