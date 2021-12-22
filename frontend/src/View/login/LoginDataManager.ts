import UserApi from "../../common/Api/UserApi";
import CookieManager from "../../common/Cookies/CookiesManager";
import User from "../../Model/User";
import LocationApi from "../../common/Api/LocationApi";

export default class LoginDataManager {
  public userApi = UserApi.getInstance();
  public locationApi = LocationApi.getInstance();

  public loginUser(
    username: string,
    password: string,
    success: (data: User) => void,
    failure: (error: string) => void
  ) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    this.userApi
      .login(formData)
      .then((response) => {
        let result = response.data;
        if (response.code == 0) {
          failure("Login unsuccess!!!");
          return;
        }
        CookieManager.saveCookie("accessToken", response.accessToken);
        success(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //TODO: - Thêm những tham số cần truyền vào trong khai báo hàm
  public registerUser(
    username: string,
    password: string,
    rePassword: string,
    email: string,
    displayName: string, 
    dateOfBirth: string,
    gender: number,
    success: (user: User) => void,
    failure: (error: string) => void
  ) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append('rePassword', rePassword);
    formData.append('email', email);
    formData.append('displayName', displayName);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('gender', `${gender}`);

    this.userApi.register(formData).then(response => {
      
    })
  }
}
