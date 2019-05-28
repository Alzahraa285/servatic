import { serverHttp } from '../httpClient'

const token = localStorage.getItem('token');


export const AddAgent = (payload) => {
  let model=JSON.parse( localStorage.getItem('model'));

  serverHttp.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const data = {
    name: payload.agentname,
    email: payload.agentemail,
    username: payload.agentusername,
    password: payload.agentpassword,
    company_id:model.company_id,
    token: token
  }
  return serverHttp.post('/agents', data)
    .then(res => console.log('sucess', res))
    .catch(err => console.log(err))
}
