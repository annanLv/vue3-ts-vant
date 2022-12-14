export enum CLINET_COMMAND {
  /* 关闭浏览器指令 */
  CLOSE = 'onCloseBtnClick',
  /*  前往用户中心 */
  USER_CENTER = 'onUserCenterBtnClick',
  /* 注销账号后， 跳回APP登录首页 */
  cancellationAccountSuccessHandler = 'cancellationAccountSuccessHandler',
  cancellationAccountSuccessData = 'cancellationAccountSuccessData',
  //成为爵位用户，体验快速升级
  goNobility = 'goNobility',
  //前往福利中心
  GOWELFARECENTER = 'goWelfareCenter',
  // 底部弹出充值弹窗
  // 安卓 需使用 window.bridge.reCharge();
  RECHARGE = 'reCharge',
  // 跳转至发现首页
  HOT_DYNAMIC = 'hotDynamic'
}


export type Result<D = any> = {
  code?: number,
  message?: string,
  msg?: string,
  data?: D
}
