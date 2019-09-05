<template>
  <div>
      <!-- 导航头 -->
      <van-nav-bar
      title="登录"
      />
      <!-- 输入框 -->
      <van-cell-group>
          <van-field v-model="user.mobile" left-icon="phone-o" placeholder="请输入手机号码" />
          <van-field v-model="user.code" left-icon="star-o" placeholder="请输入验证码" >
              <van-button slot="button" size="small">发送验证码</van-button>
          </van-field>
      </van-cell-group>
      <!-- 登录按钮 -->
      <div class="login-btn">
          <van-button class="btn" type="info" @click="handleLogin">登录</van-button>
      </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        let res = await login(this.user)
        console.log(res)
        this.$store.commit('setUser', res)
        this.$router.push('/')
        this.$toast.success('已登录')
      } catch (err) {
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
    padding: 20px;
    .btn {
        width: 100%;
    }
}
</style>
