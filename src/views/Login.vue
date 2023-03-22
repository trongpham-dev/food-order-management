<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import type UserLogin from '../model/user/Login'

const userStore = useUserStore()
const userLogin = { email: '', password: '' } as UserLogin

const login = async () => {
  try {
    await userStore.login(userLogin)
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="userLogin.email" name="username" class="form-control" />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" v-model="userLogin.password" name="password" class="form-control" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>
