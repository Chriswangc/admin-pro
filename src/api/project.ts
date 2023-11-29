import { get } from '@/http/request';

export const getProject = async (data) => {
    return get({}, '/getProject', data);
};
