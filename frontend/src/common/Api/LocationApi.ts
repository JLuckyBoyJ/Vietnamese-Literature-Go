import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Location from "../../Model/Location";

export default class LocationApi extends ProtectedHttpClient {
  private static classInstance: LocationApi;

  constructor() {
    super("http://localhost:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LocationApi();
    }
    return this.classInstance;
  }

  public getListLocation = () => this.instance.get<BaseResponse<Location>>('/list');

}
