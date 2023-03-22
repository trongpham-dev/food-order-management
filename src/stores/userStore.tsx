import { AxiosHttpClient } from '@/api/AxiosHttpClient'
import type { IHttpClient } from '@/api/IHttpClient'
import type UserLogin from '@/model/user/Login'
import type UserProfile from '@/model/user/Profile'
import type Token from '@/model/user/Token'
import axios from 'axios'
import { defineStore } from 'pinia'

const http: IHttpClient = new AxiosHttpClient(
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
)
export const useUserStore = defineStore('user', {
  state: () => ({
    token: {
      token: '',
      created: '',
      expiry: ''
    } as Token,
    profile: {
      userId: '',
      role: ''
    } as UserProfile
  }),
  actions: {
    async login(payload: any) {
      try {
        const data = await http.post<Token>('http://localhost:8080/v1/login', payload)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
})
