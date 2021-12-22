import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Location from "../../Model/Location";
import CookieManager from "../Cookies/CookiesManager";

export default class LocationApi extends ProtectedHttpClient {
  private static classInstance: LocationApi;

  constructor() {
    // super("http://localhost:8080/api/location");
    super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LocationApi();
    }
    this.classInstance.instance.defaults.headers.common["Authorization"] = 'Bearer ' + CookieManager.getCookieWithName('accessToken')
    return this.classInstance;
  }

  public getListLocation = () => {
    return this.instance.get<BaseResponse<Location>, BaseResponse<Location>>('/list');
  }


}
