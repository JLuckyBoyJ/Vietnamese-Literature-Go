import ProtectedHttpClient from "../HttpClient/ProtectedHttpClient";
import BaseResponse from '../BaseResponse';

export default class QuizApi extends ProtectedHttpClient {
  private static classInstance: QuizApi;

  constructor() {
    super("http://localhost:8080/api/achivement");
    // super("http://192.168.1.6:8080/api/location");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new QuizApi();
    }
    return this.classInstance;
  }

}
