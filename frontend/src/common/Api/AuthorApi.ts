import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Author from "../../Model/Author";

export default class AuthorApi extends ProtectedHttpClient {
  private static classInstance: AuthorApi;

  constructor() {
    super("http://localhost:8080/api/fact");
    // super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AuthorApi();
    }
    return this.classInstance;
  }

  public getListAuthor = () => {
    return this.instance.get<BaseResponse<Author>, BaseResponse<Author>>(`/list`);
  }
}
