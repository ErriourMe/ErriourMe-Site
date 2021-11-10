<template>
  <Page :breadcrumbs="breadcrumbs" class="cv-page">
    <hr />
    <div class="row pt-5">
      <div class="col-12 col-md-3 col-xl-2 d-flex justify-content-center">
        <div class="avatar cv-page__avatar">
          <img
            src="/static/images/avatar2.webp"
            alt="Photo"
            draggable="false"
          />
        </div>
      </div>
      <div
        class="
          col-12 col-md-9 col-xl-10
          d-flex
          flex-column
          justify-content-center
          align-items-center align-items-md-start
          mt-4 mt-md-0
        "
      >
        <div
          class="
            d-flex
            align-items-center
            cv-page__title
            flex-column flex-md-row
          "
        >
          <h2 class="text-center text-md-start">Владимир Гончар</h2>
          <span>
            <a
              v-b-tooltip
              href="https://github.com/ErriourRU"
              target="_blank"
              title="GitHub"
            >
              <SvgIcon name="github" />
            </a>
            <a
              v-b-tooltip
              href="https://ru.stackoverflow.com/users/300171"
              target="_blank"
              title="🇷🇺 StackOverfow"
            >
              <SvgIcon name="stackoverflow" />
            </a>
          </span>
        </div>
        <div class="cv-page__role text-center text-md-start mt-3 mt-md-0">
          <p>Fullstack веб-разработчик (Санкт-Петербург, РФ)</p>
        </div>
        <div
          class="
            cv-page__contacts
            flex-column flex-md-row
            text-center text-md-start
            mt-3 mt-md-0
          "
        >
          Контакты для связи:
          <span class="mt-2 mt-md-0">
            <a class="cv-page__contact" href="mailto:erriour.me@gmail.com">
              Email
            </a>
            <a
              v-b-tooltip
              class="cv-page__contact"
              href="https://t.me/erriour"
              title="Предпочтительный способ связи"
            >
              Telegram
            </a>
            <a
              v-b-tooltip
              class="cv-page__contact"
              href="https://vk.me/erriour"
            >
              VK
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 col-xl-3">
        <div class="position-sticky" style="top: 20px">
          <div class="cv-page__sidebar-block">
            <h3 class="d-flex align-items-center">
              Навыки
              <!-- <span class="help-icon">?</span> -->
            </h3>
            <div class="help cv-page__sidebar-help">Frontend разработка</div>
            <div>
              <a href="#" class="badge badge-pill badge-primary">JavaScript</a>
              <a class="badge badge-pill badge-primary" href="#">HTML</a>
              <a class="badge badge-pill badge-primary" href="#">CSS</a>
              <a class="badge badge-pill badge-primary" href="#">SaSS/SCSS</a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-legacy text-white"
                href="#"
                title="Им ещё кто-то пользуется, когда есть SCSS? :)"
              >
                <strike>Less</strike>
                <span class="help-icon">?</span>
              </a>
              <a class="badge badge-pill badge-primary" href="#">
                Адаптивная верстка
              </a>
              <a class="badge badge-pill badge-primary" href="#">Bootstrap</a>
              <a class="badge badge-pill badge-primary" href="#">Vue</a>
              <a class="badge badge-pill badge-primary" href="#">Editor.js</a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-legacy text-white"
                href="#"
                title="Технология устарела, использую только для переноса на новые технологии"
              >
                <strike>jQuery</strike>
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-success text-white"
                href="#"
                title="Начал разбираться для перехода с Vue"
              >
                React.js
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-success text-white"
                href="#"
                title="Начал разбираться для перехода с Nuxt.js (Vue) — основная проблема последнего в частом рассинхроне с SSR, недостаточной гибкости, низкой производительности на больших проектах, частных проблемах (например, невозможности синхронной смены 404 ошибки)"
              >
                Next.js
                <span class="help-icon">?</span>
              </a>
            </div>

            <div class="help cv-page__sidebar-help mt-2">
              Backend разработка
            </div>
            <div>
              <a class="badge badge-pill badge-primary" href="#">ООП</a>
              <a class="badge badge-pill badge-primary" href="#">MVC</a>
              <a class="badge badge-pill badge-primary" href="#">PHP</a>
              <a class="badge badge-pill badge-primary" href="#">Smarty</a>
              <a class="badge badge-pill badge-primary" href="#">SQL</a>
              <a class="badge badge-pill badge-primary" href="#">
                MySQL / MariaDB
              </a>
              <a class="badge badge-pill badge-primary" href="#">Laravel</a>
              <a class="badge badge-pill badge-primary" href="#">
                Laravel Echo / Websockets
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Работал с кассами для приема платежей: Unitpay, MyKassa, FreeKassa (новая и старая), Enot.io, Qiwi, Robokassa, Tinkoff эквайринг"
              >
                Payment gateways
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Аутентификация на сайте через соц.сети: VK, Yandex, Discord, Steam. В основном через пакеты (Laravel Social Providers)"
              >
                OAuth
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="В основном весь бэкенд разрабатываю в виде API, так надо для современного фронтенда :)"
              >
                REST API
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-legacy text-white"
                href="#"
                title="Мало опыта, были задачи на нем без возможности смены, писал — не понравилось"
              >
                Yii 2
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Начальные знания"
              >
                Redis
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Начальные знания"
              >
                MongoDB
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-legacy text-white"
                href="#"
                title="Разрабатывал модули под эту CMS в самом начале, уже legacy"
              >
                <strike>DLE</strike>
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-success text-white"
                href="#"
                title="Начал разбираться для перехода с PHP"
              >
                Node.js
                <span class="help-icon">?</span>
              </a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-success text-white"
                href="#"
                title="
                Начал разбираться для перехода с Laravel, в основном из-за отсутствия нормальной поддержки веб-сокетов в PHP.
                Adonis.js перенес принципы Laravel на node.js, поэтому такой выбор
              "
              >
                Adonis.js
                <span class="help-icon">?</span>
              </a>
            </div>

            <div class="help cv-page__sidebar-help mt-2">
              Администрирование / DevOps / CI/CD
            </div>
            <div>
              <a class="badge badge-pill badge-primary" href="#">Linux</a>
              <a class="badge badge-pill badge-primary" href="#">Debian</a>
              <a class="badge badge-pill badge-primary" href="#">FTP</a>
              <a class="badge badge-pill badge-primary" href="#">Nginx</a>
              <a class="badge badge-pill badge-primary" href="#">NPM</a>
              <a class="badge badge-pill badge-primary" href="#">PM2</a>
              <a class="badge badge-pill badge-primary" href="#">Composer</a>
              <a class="badge badge-pill badge-primary" href="#">PMA</a>
              <a class="badge badge-pill badge-primary" href="#">Git</a>
              <a class="badge badge-pill badge-primary" href="#">Github</a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Использование DNS, SSL сертификатов"
              >
                Cloudflare
                <span class="help-icon">?</span>
              </a>
              <a class="badge badge-pill badge-success" href="#">RoadRunner</a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-success"
                href="#"
                title="Начал разбираться для CI/CD"
              >
                Docker
                <span class="help-icon">?</span>
              </a>
            </div>

            <div class="help cv-page__sidebar-help mt-2">Дизайн</div>
            <div>
              <a class="badge badge-pill badge-primary" href="#">Photoshop</a>
              <a class="badge badge-pill badge-primary" href="#">Figma</a>
              <a class="badge badge-pill badge-primary" href="#">UI/UX</a>
            </div>

            <div class="help cv-page__sidebar-help mt-2">Другое</div>
            <div>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Знаю, что такое SQLinjection, XSS, LFI/RFI (и другие страшные буквы)"
              >
                Информационная безопасность
              </a>
              <a class="badge badge-pill badge-primary" href="#">ClickUp</a>
              <a class="badge badge-pill badge-primary" href="#">Trello</a>
              <a class="badge badge-pill badge-primary" href="#">Postman</a>
              <a class="badge badge-pill badge-primary" href="#">Icecast 2</a>
              <a
                v-b-tooltip
                class="badge badge-pill badge-primary"
                href="#"
                title="Лучше сюда не лезть (:"
              >
                UML
              </a>
              <a class="badge badge-pill badge-primary" href="#">
                MySQL Workbench
              </a>
            </div>
          </div>

          <div class="cv-page__sidebar-block mt-4">
            <h3 class="d-flex align-items-center">Языки</h3>
            <div>
              <ul>
                <li>Русский (родной)</li>
                <li>
                  Английский (B2.1)
                  <span
                    v-b-tooltip
                    class="help-icon ml-2"
                    title="Свободное чтение тех.документации"
                  >
                    ?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-9 mt-5 mt-xl-0">
        <h3>Обо мне</h3>
        <p>
          Занимаюсь разработкой веб-приложений. Главная задача - решать проблему
          бизнеса, поэтому я FullStack-разработчик, который может и дизайн
          нарисовать, и довести сайт до релиза.
        </p>

        <p>
          Проявляю интерес технологиями, постоянно развиваюсь и учу что-то
          новое. В свободное время интересуюсь околоигровой тематикой (например,
          игровой журналистикой) и играю в игры, а также на гитаре и синтезаторе
          :)
        </p>

        <b-tabs class="mt-5">
          <b-tab title="Работа">
            <Work />
          </b-tab>
          <b-tab title="Образование">
            <Education />
          </b-tab>
          <b-tab title="Фриланс / проекты">
            <Freelance />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </Page>
</template>

<script>
export default {
  components: {
    Page: () => import('~/components/Page'),
    Work: () => import('~/components/CV/Tabs/Work'),
    Education: () => import('~/components/CV/Tabs/Education'),
    Freelance: () => import('~/components/CV/Tabs/Freelance'),
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Главная',
          href: '/',
        },
        {
          text: 'Резюме',
          active: true,
        },
      ],
    }
  },
  head: {
    title: 'Резюме',
  },
}
</script>

<style lang="scss">
.cv-page {
  &__avatar {
    width: 120px;
    height: 120px;
  }

  &__title {
    a {
      width: 20px;
      height: 20px;
      margin-bottom: 0.5rem;
      margin-left: 0.8rem;
      transition: 0.2s ease;
      display: inline-block;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__contact {
    display: inline-flex;
    align-items: center;
    text-decoration: underline;

    &:first-child {
      margin-left: 11px;
    }

    & + & {
      margin-left: 15px;

      &:before {
        display: block;
        content: '';
        width: 15px;
        height: 4px;
        border-radius: 3px;
        background: #d2d2d2;
        margin-right: 15px;
      }
    }
  }

  &__contacts {
    display: inline-flex;
    align-items: center;
  }

  &__sidebar {
    &-help {
      margin-bottom: 8px;
    }
  }
}
</style>
