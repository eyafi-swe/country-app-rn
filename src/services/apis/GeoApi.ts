import { AxiosInstance } from "axios";
import Api from "./defaultApi";

class GeoApi extends Api {
    constructor(_axios: AxiosInstance) {
        super(_axios);
    }

    getData(url: string, params: any) {
        return this.get(url, params);
    }
}

export default GeoApi;
