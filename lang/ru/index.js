// Russian language

import meta from './meta'

export default {
  meta,
  parts: {
    and: 'и',
  },
  error: {
    404: 'Такой страницы на нашем сайте нет!',
    500: 'Произошла ошибка сервера',
  },
  header: {
    menu: 'Меню',
    delivery: 'Доставка и оплата по всему миру',
    cart: 'Корзина',
  },
  footer: {
    info: {
      text: 'ИП Королев К.С.  <br> ИНН: 740499039437 <br> ОГРНИП: 320745600121246',
      policy: 'Политика конфиденциальности',
      public_offer: 'Публичная офферта',
      login: 'Вход в аккаунт',
    },
    payment: {
      title: 'Способы оплаты',
      text: '',
      extra_text:
        'Вы можете оплатить покупки банковской <br> картой онлайн, наличными при получении,<br> либо выбрать',
      another_payment: 'другой способ оплаты',
    },
    contacts: {
      phone: {
        number: '+7 (909) 074 05 50',
        text: 'Звонок бесплатный',
      },
      mail: {
        address: 'sale@woolly.land',
        text: 'Почта для связи',
      },
      vk: 'Мы в VK',
      instagram: 'Мы в Instagram',
      whatsapp: 'Мы в WhatsApp',
    },
  },
  menu: {
    /* Main menu */
    general: 'Главная',
    catalog: 'Каталог',
    delivery: 'Доставка и оплата',
    return: 'Гарантии и возврат',
    voices: 'Отзывы',
    about: 'О компании',
    wholesale: 'Оптовая закупка и сотрудниество',

    /* Categories menu */
    sweater: 'Скандинавские свитеры',
    accesories: 'Аксессуары',
    clothes: 'Трикотаж',
  },
  slider: {
    slide1: {
      line1: 'НОВОГОДНИЕ СВИТЕРЫ',
      line2: '',
      subtitle: 'WOOLLY - Связано с любовью ♥',
    },
    slide2: {
      line1: 'КОСТЮМЫ, ХУДИ',
      line2: '',
      subtitle: 'WOOLLY - Сделано с любовью ♥',
    },
    slide3: {
      line1: 'АКСЕССУАРЫ',
      line2: '',
      subtitle: 'WOOLLY - Связано с любовью ♥',
    },
  },
  buttons: {
    more: 'Подробнее',
    goto_catalog: 'Перейти в каталог',
  },
  sell_leaders: {
    title: 'Хиты продаж',
  },
  cart: {
    epmty_message: 'Ваша корзина совсем пуста! Продолжайте покупки :)',
  },
  offers: {
    gift: {
      title: 'Носки в подарок',
      text: 'Оплати покупку онлайн и получи шерстяные носки в подарок!',
    },
    delivery: {
      title: 'Лучшие условия доставки',
      text: 'Доставим наши свитеры по всему миру, оплата при получении!',
    },
    pack: {
      title: 'Подарочная упаковка!',
      text: 'Любой товар, представленный в нашем интернет-магазине, можно дополнительно упаковать в подарочную коробку. Вы можете добавить ее к своему заказу в корзине.',
    },
  },

  pages: {
    login: {
      title: 'Вход в аккаунт',
      form: {
        login: {
          title: 'Логин',
          placeholder: 'Введите логин',
        },
        password: {
          title: 'Пароль',
          placeholder: 'Введите пароль',
        },
        submit: 'Войти',
      },
      back_to_home: 'Вернуться на главную',
    },
    catalog: {
      category: {
        all: 'Все',
      },
      gender: {
        male: 'Мужской',
        female: 'Женский',
      },
    },
  },
}
