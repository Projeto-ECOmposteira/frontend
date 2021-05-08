import api from "../services/api";

export async function signIn(email: string, password: string): Promise<any> {
  let url = '/api/login/'

  let request = await api.post(url, {
    'username': email,
    'password': password,
  })

  return request
}
