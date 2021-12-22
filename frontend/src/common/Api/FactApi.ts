import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import TheFact from '../../Model/TheFact';

export default class FactApi extends ProtectedHttpClient {
  private static classInstance: FactApi;

  constructor() {
    // super("http://localhost:8080/api/fact");
    super("http://192.168.1.6:8080/api/fact");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new FactApi();
    }
    return this.classInstance;
  }

  public getListFact = (locationId: number) => {
    return this.instance.get<BaseResponse<TheFact>, BaseResponse<TheFact>>(`/list?locationId=${locationId}`);
  }
}
