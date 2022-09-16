import request from '@/utils/request';
import { AxiosResponse } from 'axios';

type Result<T> = {
  code?: number,
  message?: string,
  msg?: string,
  data?: T
}


export function getListApi<T = any>(): Promise<AxiosResponse<Result<T>>> {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get'
  });
}
