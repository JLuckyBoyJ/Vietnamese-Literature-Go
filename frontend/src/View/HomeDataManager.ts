import LocationApi from '../common/Api/LocationApi'
import User from "../Model/User";
import Location from "../Model/Location";

export default class HomeDataManager {
    public locationApi = LocationApi.getInstance();
    public getLocationList(
        success: (data: Location[]) => void,
        failure: (error: string) => void
    ) {
        let formData = new FormData()
        this.locationApi
            .getListLocation()
            .then((response) => {
                let result = response.datas;
                if (response.code == 0) {
                    failure('Login unsuccess!!!')
                    return
                }
                success(result)
            }).catch((error) => {
                console.log(error)
        })
    }
}