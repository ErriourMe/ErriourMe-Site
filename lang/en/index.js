// English language

import cv from './pages/cv'
import index from './pages/index'

export default {
  pages: {
    index,
    cv,
  },
  name: 'Vladimir Gonchar',
  parts: {
    and: 'and',
    im_in: "I'm in",
  },
  actions: {
    home: 'Go to home page',
  },
  error: {
    404: 'There is no such page',
    500: 'Server error',
  },
}
