import { useEffect, useState } from 'react';
import api from '../services/apis/api';

const useFetch = (url: string | null, trigger: boolean, param: {}) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url || !trigger) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const params = { ...param, limit: 10 };
                const response = await api.geoApi.getData(url, params) as any;
                console.log('response', response);
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };


        fetchData();
    }, [url, trigger]);

    return { data, loading, error };
};

export default useFetch;
