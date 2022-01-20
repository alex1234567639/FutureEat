import jwt_decode from 'jwt-decode'

// 用code取得user資訊，存入sessionStorage
export function setUserInfo(code) {
  $.ajax({
    url: 'https://api.line.me/oauth2/v2.1/token',
    async : false,
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://192.168.2.174:8081',
      client_id: '1656806827',
      client_secret: '3648e376686ce8b7f94c4ab611515233'
    },
    success: function (res) {
      const user_id = jwtDecode(res.id_token).sub
      sessionStorage.setItem('user_id', user_id)
    }
  })
}

// 解析id_token
export function jwtDecode(jwtString) {
  return jwt_decode(jwtString)
}
