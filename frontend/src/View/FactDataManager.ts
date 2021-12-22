import Fact from '../Model/TheFact'
import FactApi from '../common/Api/FactApi'
export default class FactDataManager {
    public factApi = FactApi.getInstance();
    public getListFact(
        locationId: number,
        success: (data: Fact[]) => void,
        failure: (error: string) => void
    ) {
        let formData = new FormData()
        this.factApi
            .getListFact(locationId)
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