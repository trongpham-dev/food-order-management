import type { AxiosInstance } from 'axios'
import type { HttpClientResponse, IHttpClient } from './IHttpClient'

export class AxiosHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  async get<T>(path: string): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.get(path)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }
  async post<T>(path: string, body: T): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.post(path, body)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }
  async put<T>(path: string, body: T): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.post(path, body)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }

  async patch<T>(path: string, body: T): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.patch(path, body)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }

  async delete<T>(path: string): Promise<HttpClientResponse<T>> {
    try {
      const { data } = await this.axiosInstance.delete(path)
      return [null, data]
    } catch (error) {
      return [error]
    }
  }
}
