import UserApi from "../../common/Api/UserApi";
import CookieManager from "../../common/Cookies/CookiesManager";
import User from "../../Model/User";

export default class LoginDataManager {
  public userApi = UserApi.getInstance();

  public getPosts(
    username: string,
    password: string,
    success: (data: User) => void,
    failure: (error: string) => void
  ) {
    let formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    this.userApi
      .login(formData)
      .then((response) => { 
        let result = response.data;
        if (response.code == 0) {
          failure('Login unsuccess!!!')
          return
        }
        CookieManager.saveCookie('accessToken', response.accessToken)
        success(result)
      })
      .catch((error) => {
        console.log(error)
      });
  }
}
