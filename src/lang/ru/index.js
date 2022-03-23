// Russian language

import cv from './pages/cv'
import index from './pages/index'

export default {
  pages: {
    index,
    cv,
  },
  name: 'Владимир Гочнар',
  parts: {
    and: 'и',
    im_in: 'Я в',
  },
  actions: {
    home: 'Вернуться на главную',
  },
  error: {
    404: 'Такой страницы на нашем сайте нет!',
    500: 'Произошла ошибка сервера',
  },
}
