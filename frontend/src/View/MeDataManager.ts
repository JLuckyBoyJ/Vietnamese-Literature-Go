import AchivementApi from "../common/Api/AchivementApi";
import UserAchivement from '../Model/UserAchivement';

const achivementApi = AchivementApi.getInstance();
export default class MeDataManager {

  public getAchivement(
    success: (data: UserAchivement) => void,
    failure: (error: string) => void
  ) {
    achivementApi
      .getAchivements()
      .then((response) => {
        let result = response.data;
        if (response.code == 0) {
          failure(response.message);
          return;
        }
        success(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
}
