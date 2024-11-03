import { AxiosInstance, AxiosResponse } from "axios";

class Api {
    private axios: AxiosInstance;
    private prefix: string;

    constructor(_axios: AxiosInstance, _prefix: string = "") {
        this.axios = _axios;
        this.prefix = _prefix;
    }

    get<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.axios
            .get<T>(`${this.prefix}${url}`, { params })
            .then((res: AxiosResponse<T>) => res.data);
    }

    post<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.axios
            .post<T>(`${this.prefix}${url}`, params)
            .then((res: AxiosResponse<T>) => res.data);
    }

    put<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.axios
            .put<T>(`${this.prefix}${url}`, params)
            .then((res: AxiosResponse<T>) => res.data);
    }

    delete<T>(url: string, params: Record<string, any> = {}): Promise<T> {
        return this.axios
            .delete<T>(`${this.prefix}${url}`, { params })
            .then((res: AxiosResponse<T>) => res.data);
    }
}

export default Api;
