import request from '@/utils/request'

/**
 * 登录
 * @param {*}  登录组件提交服务器的数据 mobile code
 */
export const login = ({
  mobile,
  code
}) => {
  return request.post('/app/v1_0/authorizations', {
    mobile, code
  })
}
