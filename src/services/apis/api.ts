import axios from "../plugins/axios";
import GeoApi from "./GeoApi";

export default {
    geoApi: new GeoApi(axios)
};
