import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import TheFact from '../../Model/TheFact';

export default class LocationApi extends ProtectedHttpClient {
  private static classInstance: TheFact;

  constructor() {
    super("http://localhost:8080/api/fact");
    // super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new TheFact();
    }
    return this.classInstance;
  }

  public getListFact = (locationId: number) => {
    return this.instance.get<BaseResponse<TheFact>, BaseResponse<TheFact>>(`/list?locationId=${locationId}`);
  }


}
