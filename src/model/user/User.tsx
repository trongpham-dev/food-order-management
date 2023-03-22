export interface UserToken {
  token: string
  created: string
  expiry: string
}

export interface UserPermission {
  userId: string
  role: string
}

export interface UserLogin {
  email: string
  password: string
}
