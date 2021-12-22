import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';
import Achivement from "../../Model/Achivement";
import UserAchivement from '../../Model/UserAchivement';

export default class AchivementApi extends ProtectedHttpClient {
  private static classInstance: AchivementApi;

  constructor() {
    super("http://localhost:8080/api/achivement");
    //super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AchivementApi();
    }
    return this.classInstance;
  }

  public getAchivements = () => this.instance.get<BaseResponse<UserAchivement>,BaseResponse<UserAchivement>>('/list')

}
