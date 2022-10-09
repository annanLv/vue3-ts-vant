<template>
  <div class="mt-[100px] flex">1231</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-cell-group inset>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
</template>
<script lang="ts" setup>

import {PartialByKeys, Simplify} from '@/utils/typeMethod';


type User = {
  id: number,
  name: string,
  age: number
}

type U1 = Simplify<PartialByKeys<User, 'id' | 'name'>>
let u: U1 = {
  age: 12,
  name: '12'
};

type Ac = { name?: string } & { name: string }

let ac: Ac = {
  name: '12'
};

let aaa = {
  cc: '12',
  bb: 12321,
  dd: '12321'
};

console.log(ac);

console.log(u.name?.includes('12'));

</script>
