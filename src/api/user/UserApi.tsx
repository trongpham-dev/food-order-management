import type { UserLogin, UserToken } from '@/model/user/User'
import axios from 'axios'

export abstract class UserApi {
  private static userAxios = axios.create()
  static async login(payload: UserLogin): Promise<UserToken> {
    console.log(payload)
    const response = await this.userAxios.post<UserToken>('http://localhost:8080/v1/login', payload)
    return JSON.parse(JSON.stringify(response.data))
  }
}
