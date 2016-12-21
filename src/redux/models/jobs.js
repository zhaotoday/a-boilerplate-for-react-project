import REST from 'utils/rest'
import consts from 'utils/consts'
import auth from 'utils/auth'

export default class extends REST {
  constructor() {
    super()
    this.baseURL = consts.API_URL
    this.path = 'jobs'
    this.headers = auth.getAuth()
  }
}
