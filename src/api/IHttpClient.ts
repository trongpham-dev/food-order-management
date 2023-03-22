export type HttpClientResponse<T> = [null, T] | [Error | any]

export interface IHttpClient {
  get<T = unknown>(path: string): Promise<HttpClientResponse<T>>
  post<T = unknown>(path: string, body: T): Promise<HttpClientResponse<T>>
  put<T = unknown>(path: string, body: T): Promise<HttpClientResponse<T>>
  patch<T = unknown>(path: string, body: T): Promise<HttpClientResponse<T>>
  delete<T = unknown>(path: string): Promise<HttpClientResponse<T>>
}
