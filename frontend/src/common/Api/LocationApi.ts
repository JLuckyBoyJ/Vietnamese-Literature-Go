import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Location from "../../Model/Location";
import LoginResponse from "../LoginResponse";
import User from "../../Model/User";

export default class LocationApi extends ProtectedHttpClient {
  private static classInstance: LocationApi;

  constructor() {
    super("http://localhost:8080/api/location");
    // super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LocationApi();
    }
    return this.classInstance;
  }

  public getListLocation = () => {
    return this.instance.get<BaseResponse<Location>, BaseResponse<Location>>('/list');
  }


}
