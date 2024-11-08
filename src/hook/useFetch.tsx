import { useEffect, useRef, useState } from 'react';
import api from '../services/apis/api';
import { getQueryParams } from '../utils/helperFuntions';

const useFetch = (url: string | null, trigger: boolean, param: {}) => {
    const [data, setData] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [paramData, setParamData] = useState<{ [key: string]: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const prevParamRef = useRef<string>(JSON.stringify(param));


    useEffect(() => {
        if (!url || !trigger) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const params = paramData ? paramData : { ...param, limit: 10 };
                const response = await api.geoApi.getData(url, params) as any;
                console.log('response', response);
                if (response?.links) {
                    const nextLink = response.links.find((link: any) => link.rel === "next");
                    if (!nextLink) {
                        setParamData(null);
                        setHasMore(false);
                    } else {
                        const queryParams = getQueryParams(nextLink.href);
                        setParamData(queryParams);
                        setHasMore(true);
                    }
                }
                const paramStr = JSON.stringify(param);
                if (paramStr !== prevParamRef.current) {
                    setData(response.data);
                    prevParamRef.current = paramStr;
                } else {
                    setData((prevData) => [...prevData, ...response.data]);
                }
            } catch (error: any) {
                console.log('error', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, trigger]);

    return { data, loading, error, hasMore, setHasMore };
};

export default useFetch;
