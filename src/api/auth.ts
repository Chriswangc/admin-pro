import { get } from '@/http/request';

// 权限列表接口
export const getAuthorityList = async (data) => {
    return get({}, '/getAuthorityList', data);
};
