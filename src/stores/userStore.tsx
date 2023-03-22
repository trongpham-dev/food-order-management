import { UserApi } from '@/api/user/UserApi'
import type { UserLogin, UserPermission, UserToken } from '@/model/user/User'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    data: {
      token: '',
      created: '',
      expiry: ''
    } as UserToken,
    profile: {
      userId: '',
      role: ''
    } as UserPermission
  }),
  actions: {
    async login(payload: UserLogin): Promise<UserToken> {
      const response = await UserApi.login(payload)
      console.log(response)
      this.data = response
      localStorage.setItem('FD-ACCESS', this.data.token)
      return response
    }
  }
})
