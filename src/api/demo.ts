import request from '@/utils/request';
import { AxiosResponse } from 'axios';

type Result<T> = {
  result: T,
  arr: string[],
  list: string[],
  total: number
}


export function getListApi<T = any>(): Promise<AxiosResponse<Result<T>>> {
  return request({
    url: '/ads/CEBICK3M.json?segment=placement:routervuejsorg',
    method: 'get'
  });
}
