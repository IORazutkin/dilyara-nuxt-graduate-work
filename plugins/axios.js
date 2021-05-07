import https from 'https'

/**
 * @param {*} root0 - root
 * @param {*} root0.$axios - axios
 * @param {*} root0.redirect - redirect function
 */
export default function ({ $axios, redirect }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })

  $axios.onError((error) => {
    console.log(error)

    if (error.response.status === 401) {
      redirect('/login')
    }
  })
}
