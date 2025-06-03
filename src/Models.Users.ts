// =====================|SEVEN|===============================|1/7|

// 1
export interface ILogin {
  email: string;
  password: string;
}

// 2
export interface IAvatar {
  name: string;
  url: string;
}

// 3
export interface IEmployee {
  name: string
  position: string
  photo: string
}

// 4
export type IUserType = {
  id: number,
  email?: string,
  password?: string
}

// 5
export interface IAuthData {
  id: number;
  email: string;
  password: string;
}

//6
export interface IUserData {
  id: string;
  email?: string | undefined;
  role?: string | undefined;
  created_at?: string;
  confirmed_at?: string | undefined;
  last_sign_in_at?: string | undefined;
  updated_at?: string | undefined;
  aud?: string;
}


// =======================|SEVEN|====================================[1/7]

