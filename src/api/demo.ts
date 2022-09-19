import request from '@/utils/request';
import { AxiosResponse } from 'axios';

import { Result } from '@/utils/types';


export function getListApi<T = any>(): Promise<AxiosResponse<Result<T>>> {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get'
  });
}
