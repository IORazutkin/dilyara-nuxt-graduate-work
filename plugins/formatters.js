import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    const date = new Date(value.split('T')[0].replace(/-/g, '/'))
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')

    return day + '.' + month + '.' + date.getFullYear()
  }
})

Vue.filter('dashboardDate', function (value) {
  if (value) {
    const date = new Date(value.split('T')[0].replace(/-/g, '/'))
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ]

    return months[date.getMonth()] + ' ' + date.getFullYear()
  }
})

Vue.filter('moneyFilter', function (value, isInteger = false) {
  if (value) {
    let str
    if (value.toString().includes('.')) {
      str = value.toFixed(2).toString()
    } else {
      str = value.toString()
    }
    let result = ''

    if (!isInteger) {
      const isFloat = str.indexOf('.')
      if (isFloat > 0) {
        result = ',' + str.substring(isFloat + 1)
        str = str.slice(0, isFloat)
      } else {
        result = ',00'
      }
    }

    if (str.length - 1 < 3) {
      return str + result
    }

    let index = str.length
    while (index > 0) {
      result = '\u00A0' + str.substring(index - 3, index) + result

      index = index - 3
    }

    return result.trim()
  }
  return value
})
