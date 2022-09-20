import request from '@/utils/request';
import { AxiosResponse } from 'axios';
import { Result } from '@/utils/types';

//Api example
export function getListApi<T = any, D = any>(params: T): Promise<AxiosResponse<Result<D>>> {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get',
    params
  });
}
