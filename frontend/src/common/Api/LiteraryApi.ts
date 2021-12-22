import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Literary from '../../Model/Literary';

export default class LiteraryApi extends ProtectedHttpClient {
  private static classInstance: LiteraryApi;

  constructor() {
    super("http://localhost:8080/api/fact");
    // super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LiteraryApi();
    }
    return this.classInstance;
  }

  public getListAuthor = () => {
    return this.instance.get<BaseResponse<Literary>, BaseResponse<Literary>>(`/list`);
  }
}
