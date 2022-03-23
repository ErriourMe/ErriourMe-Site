<template>
  <Timeline>
    <TimelineItem>
      <template #title>
        Кластерные cоц.сети с упором на сервисы — MinecraftOne и др.
      </template>
      <template #subtitle>
        2020 - ∞
        <span class="badge py-1 px-2 badge-warning ml-2">В разработке</span>
      </template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Собственный проект, направленный на создание соц.сетей, которые
                будут охватывать строго определенную группу пользователей.
                Основная суть — объеденить аудиторию по интересам и дать
                необходимые сервисы для них. Похожая логика у компании "Комитет"
                (DTF, VC, TJournal), но у них больший упор идет на блоги.
              </p>
              <p>
                Начал с Minecraft, поскольку никто такого ещё не сделал (и под
                вопросом, будет ли кто-то ещё таким заниматься). Сейчас есть
                много разрозненных сайтов с внутренней конкуренцией (топы
                серверов/проектов, сайты с ресурсами, форумы для поиска команды
                или исполнения заказов). Если объединить всё под одним сайтом, и
                дать функционал соц.сетей для ведения, например, групп для
                серверов, то можно получить уникальный ресурс, который соберет
                вокруг себя аудиторию (и будет приносить прибыль).
                <br />
                В дальнейшем можно развить такие соц.сети на другие группы
                аудиторий ("кластеры") — игры, программирование, дизайн и т.п
              </p>
              <div>
                Выбранные технологии:
                <ul>
                  <li>
                    Next.js (React.js) — более производительный, чем Vue, а
                    функционала будет много. Текущий прототип пока всё ещё
                    остался на Nuxt.js, переносится на Next.
                  </li>
                  <li>
                    Adonis.js (Node.js) для сервера — по веб-сокету должно
                    работать много чего. Прототип начат в Laravel, также будет
                    перенесен
                  </li>
                </ul>
              </div>
              <p class="mt-3">
                На данный момент реализована небольшая часть фронтенда, система
                справочников для динамического создания справочных данных
                (строятся по модели EAV в базе данных), регистрация и
                аутентификация, обработчик картинок.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 11"
                :key="`minecraftone-image-${i}`"
                :src="`/static/images/fl/minecraftone/minecraftone${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title> Биржа игровых ценностей — StalCash </template>
      <template #subtitle>
        2021 - ∞
        <span class="badge py-1 px-2 badge-warning ml-2">В разработке</span>
      </template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Сайт биржи игровых ценностей. Предполагается как площадка
                покупки и продажи валюты, аккаунтов и услуг из игры StalCraft
                (может быть исползована для большого количества игр в
                последствии).
              </p>
              <p>
                Разработка ведется на Adonis.js на сервере (выбор пал на ноду,
                поскольку необходимы полноценно работающие веб-сокеты) и Vue.js
                на стороне клиента.
              </p>
              <div>
                Планируемый функционал:
                <ul>
                  <li>Аутентификация через ВК</li>
                  <li>Создание лотов (валюта / аккаунт / услуга)</li>
                  <li>Создание сделок на лот</li>
                  <li>Пополнение баланса</li>
                  <li>Вывод средств с баланса</li>
                  <li>Чат для переписки с продавцом/покупателем в лоте</li>
                  <li>Действия чата для автоматизации продвижения сделки</li>
                  <li>Админка</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 3"
                :key="`stalcash-image-${i}`"
                :src="`/static/images/fl/stalcash/stalcash${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>Интернет-магазин — Woolly.land</template>
      <template #subtitle>2019 - 2021</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Интернет-магазин для продажи свитеров и акксесуаров в розницу и
                опт.
              </p>
              <p>
                Изначально подразумевался как лендинг с обратной связью (2019) —
                отрисовал и использовал для верстки Gulp, Less, Bootstrap 4,
                Lodash шаблонизация без серверной логики. Пристствовала отправка
                форм в Telegram бот владельцу для обработки.
              </p>
              <p>
                В 2020 владелец решил перейти на полноценный интернет-магазин,
                после чего была отрисована и разработана новая версия сайта при
                помощи Laravel (API) и Nuxt.js.
              </p>
              <p>
                Система развернута на VDS на Debian под работой в Nginx, PHP 8,
                PM2.
              </p>
              <div>
                Функционал:
                <ul>
                  <li>Каталог товаров</li>
                  <li>Категории, разделение по полу</li>
                  <li>Карточка товара</li>
                  <li>Размерная сетка и склад</li>
                  <li>Корзина</li>
                  <li>
                    Формы для сбора данных (опт) с простой защитой от спама
                  </li>
                  <li>Панель управления</li>
                  <li>Интеграция с Tinkoff эквайринг</li>
                  <li>Интеграция с Bitrix24 [удалена, но опыт остался (: ]</li>
                  <li>Интеграция с AmoCRM</li>
                  <li>Интеграция с СДЭК</li>
                </ul>
              </div>

              <div class="mt-3">
                <a
                  href="https://woolly.land"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  woolly.land
                </a>
                <a
                  href="https://opt.woolly.land"
                  class="btn btn-interface btn-sm ml-2"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  opt.woolly.land
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img src="/static/images/fl/woolly_land3.webp" />
              <img src="/static/images/fl/woolly_land.webp" />
              <img src="/static/images/fl/woolly_land2.webp" />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>
    <TimelineItem v-if="gambl">
      <template #title>Опенкейс по CS:GO — CyberCase</template>
      <template #subtitle>2020 - 2021</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Большой движок для опенкейса по CS:GO с дизайном. Используется
                Nuxt.js, Laravel, Laravel Echo, Nginx, PM2
              </p>
              <div>
                Содержит следующий функционал:
                <ul>
                  <li>Аутентификация через Steam</li>
                  <li>Привязка аккаунта ВК</li>
                  <li>Поддержка сокетов (Laravel Echo)</li>
                  <li>
                    Пополнение баланса через Enot.io, Qiwi, FreeKassa, SkinsBack
                  </li>
                  <li>Бонусная система</li>
                  <li>Категории кейсов</li>
                  <li>Звуки интерфейса</li>
                  <li>
                    Открытие кейсов за различную валюту, открытие нескольких
                    кейсов за раз
                  </li>
                  <li>
                    Создание контрактов (обмен предметов на более дорогой, как в
                    CS:GO)
                  </li>
                  <li>Апгрейд предмета</li>
                  <li>Рейтинги игроков</li>
                  <li>
                    Интеграция с CS:GO TradeMarket (получение информации о
                    предметах по CRON, отправка предметов игрокам)
                  </li>
                  <li>Инвентарь игрока</li>
                  <li>Лента дропа</li>
                  <li>Статистика</li>
                  <li>Прием отзывов за награду</li>
                  <li>
                    Система промокодов с генерацией: партнерские промокоды,
                    пользовательские промокоды, промокоды от сайта
                  </li>
                  <li>
                    Открытие бесплатных кейсов за выполнение действий (подписка
                    на группу ВК, привязка аккаунта и т.п)
                  </li>
                  <li>Админка</li>
                  <li>Статистика</li>
                  <li>Система ролей и прав</li>
                  <li>
                    Система рекламных меток (отслеживание регистраций
                    пользователей с определенной рекламы)
                  </li>
                  <li>
                    Система шансов с банками с пересчетом шансов для каждого
                    кейса в зависимости от его стоимости
                  </li>
                  <li>Тестирование кейсов и контрактов</li>
                  <li>Управление платежными методами</li>
                  <li>Создание статических страниц (Editor.js)</li>
                  <li>Логгирование действий</li>
                </ul>
              </div>

              <div class="mt-3">
                <a
                  href="https://cyber-case.net"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  cyber-case.net
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img src="/static/images/fl/cybercase5.webp" />
              <img src="/static/images/fl/cybercase6.webp" />
              <img src="/static/images/fl/cybercase7.webp" />
              <img src="/static/images/fl/cybercase1.webp" />
              <img src="/static/images/fl/cybercase2.webp" />
              <img src="/static/images/fl/cybercase3.webp" />
              <img src="/static/images/fl/cybercase4.webp" />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>
        Прототип мобильного приложения личного кабинета студента ВГУЭС
      </template>
      <template #subtitle>2020</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Мобильное приложение на основе веб-технологий (Vue.js,
                NativeScript), которое предназначается для дополнения веб-версии
                ЛК студента. На основе него была написана выпускная
                квалификационная работа в бакалавриате.
              </p>
              <p>
                Основной функционал повторяет веб-версию: расписание,
                успеваемость, объявления, статическая информация.
              </p>
              <p>
                Из-за технических особенностей сервера для получения данных
                (необходимо было использовать CMS основного сайта университета,
                которая медленно отдавала данные, и в странной форме необходимо
                было преобразовывать данные в JSON — "на коленке"
                импровизировать иммитацию API), а также из-за проблем с
                асинхронностью, приложение не было завершено. Оно было
                доработано в 2021 году другим студентом как часть его ВКР, и
                выложено в Google Play (Android).
              </p>

              <div class="mt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.vvsu.cabinet"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Google play
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 4"
                :key="`vvsulk-image-${i}`"
                :src="`/static/images/fl/vvsulk/vvsulk${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem>
      <template #title>
        Сайт комплекса серверов Minecraft — ShadowsProject
      </template>
      <template #subtitle>2019 - 2020</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Сайт для серверов по Minecraft с личным кабинетом, магазином
                предметов, форумом и новостями. Отрисован в Photoshop.
                Изначально написан на Laravel и Vue.js, впоследствии клиент был
                перенесен на Nuxt.js. Админка написана на шаблонах Blade
                (Laravel) — взята с <a href="#minecraftia">Minecraftia</a> и
                дополнялась по мере добавления функционала.
              </p>
              <div>
                Содержит следующий функционал:
                <ul>
                  <li>Аутентификация и регистрация аккаунтов</li>
                  <li>
                    Привязка аккаунта к ВК, Yandex, Discord с последующей
                    аутентификацией через них
                  </li>
                  <li>Смена и восстановление пароля</li>
                  <li>
                    Двухэтапная аутентификация для аккаунта (2FA), режим
                    проверки 2FA при смене IP
                  </li>
                  <li>
                    Пополнение баланса (интеграция с кассами: FreeKassa,
                    RoboKassa, UnitPay)
                  </li>
                  <li>Бонусная система</li>
                  <li>
                    Выдача бонусов за голосование (интеграция с TopCraft, McTop,
                    McRate)
                  </li>
                  <li>
                    Установка варпов (точек телепортации на серверах) за валюту
                    сайта
                  </li>
                  <li>Установка аватара, статуса и подписи профиля</li>
                  <li>Динамический мониторинг серверов</li>
                  <li>
                    Статистика онлайна на серверов (собирается по мониторингу)
                  </li>
                  <li>
                    Установка скина и плаща (покупка за валюту сайта для HD
                    качества)
                  </li>
                  <li>Магазин предметов за валюту сайта и бонусы</li>
                  <li>Покупка привилегий за валюту сайта</li>
                  <li>
                    Рейтинги игроков (по донату, голосам в топах, бонусам)
                  </li>
                  <li>
                    Форум — категории, темы, мягкое удаление тем, закрепление
                    тем, ответы в темах, открытие/закрытие тем (сейчас не
                    используется)
                  </li>
                  <li>Система динамическиой сборки правил</li>
                  <li>
                    Партнерская система с метками для отслеживания регистраций,
                    панель партнера
                  </li>
                  <li>Статьи и категории (с вложенностью)</li>
                  <li>Банпанель (серверы и форум)</li>
                  <li>Управление списком серверов</li>
                  <li>Админка</li>
                  <li>Статистика</li>
                  <li>Система ролей и прав</li>
                  <li>Создание статических страниц</li>
                  <li>Логгирование действий</li>
                </ul>
              </div>

              <div class="mt-3">
                <a
                  href="https://shadowsproject.ru/"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  shadowsproject.ru
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 13"
                :key="`shadowsproject-image-${i}`"
                :src="`/static/images/fl/shadowsproject/shadowsproject${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem id="minecraftia">
      <template #title>
        Сайт комплекса серверов Minecraft — Minecraftia
      </template>
      <template #subtitle>2018 - 2019</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Попытка разобраться с Laravel. Первый сайт, разработанный
                полностью на этом фреймворке. Фронтенд также сделан на Laravel
                (Blade + jQuery).
              </p>

              <p>
                Функционал сайта частично повторяет логику сайта
                <a href="#mineplay">Mine-Play</a>.
              </p>

              <p>
                Сайт был подвязан к форуму XenForo — при регистрации на сайте,
                аккаунт создавался и на форуме XenForo, в Laravel были описаны
                модели таблиц, связанных с пользователями в XF, чтобы также
                можно было получать информацию о пользователе с форума. Также
                здесь появляется логика создания динамических подключений к
                базам данных, так как нужно было подключаться к БД каждого
                сервера Minecraft для передачи информации о купленных
                привилегиях, предметах и валюте.
              </p>

              <p class="mt-3">На данный момент сайт не работает.</p>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 9"
                :key="`minecraftia-image-${i}`"
                :src="`/static/images/fl/minecraftia/minecraftia${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem v-if="gambl">
      <template #title> Опенкейс GTA / Minecraft </template>
      <template #subtitle>2017 - 2019</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Сайт для опенкейса без привязки к игре. Изначально
                разрабатывался под GTA
                <a
                  href="https://www.youtube.com/channel/UCNBhGlx5W1mXRo6q-NKWbdA"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  для ютубера Кузя (~200 тыс подписчиков)
                </a>
                , впоследствии был доработан под Minecraft (с дополнением
                функционала). Написан был давно, поэтому движок на чистом PHP
                без сокетов (поэтому не предназначался для высокой нагрузки). По
                большему счету писался для обучения PHP (после написания модулей
                DLE, где код был смешан с самой логикой CMS).
              </p>
              <p>
                По внтуренней структуре похож на DLE из-за длительной разработки
                модулей под DLE. Использовался PHP 5.6 → 7.2, MySQL, Smarty как
                шаблонизатор.
              </p>
              <div>
                Содержит следующий функционал:
                <ul>
                  <li>
                    Аутентификация через VK и Steam (со своей реализацией
                    проверки)
                  </li>
                  <li>
                    Пополнение баланса (через кассы MyKassa, FreeKassa (старая),
                    UnitPay)
                  </li>
                  <li>Категории кейсов</li>
                  <li>
                    Открытие кейсов с возможностью увеличения шансов для дорогих
                    предметов за валюту
                  </li>
                  <li>
                    Версус кейсов (сравнение количества открытий указанных
                    админом кейсов и автоматическое выставление скидки на
                    победивший, когда версус закончится)
                  </li>
                  <li>Админка</li>
                  <li>Статистика пополнений баланса и открытий</li>
                  <li>Натсройка кейсов с системой шансов и банками</li>
                  <li>Настройка предметов для кейсов</li>
                  <li>Система промокодов с генерацией</li>
                  <li>
                    Система управления заказами для ручного вывода (+ получение
                    онлайна пользователя из VK)
                  </li>
                  <li>
                    Автоматическая выдача заказов (не используется, в основном
                    для выдачи различных ключей игр и промокодов с других
                    ресурсов)
                  </li>
                  <li>Тестирование кейсов</li>
                  <li>Простая система ролей (админ, пользователь, ютубер)</li>
                  <li>Логгирование действий</li>
                </ul>
              </div>

              <p class="mt-3">
                Сейчас реализация движка до сих пор доступна для StalCase, но
                немного доработана другим программистом (весь дизайн, код и
                концепт остался неизменным)
              </p>

              <div>
                <a
                  href="https://stalcase.ru/"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  stalcase.ru
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 6"
                :key="`shadowsproject-image-${i}`"
                :src="`/static/images/fl/stalcase/stalcase${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>

    <TimelineItem id="mineplay">
      <template #title>
        Сайт комплекса серверов Minecraft — Mine-Play
      </template>
      <template #subtitle>2016 - 2018</template>
      <template #default>
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="position-sticky" style="top: 20px">
              <p>
                Один из первых крупных сайтов для серверов по Minecraft в
                коллаборации
                <a
                  href="https://www.youtube.com/channel/UCPX53dr-NSKoXspKmXanbCw"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  с ютубером Аид (~3 млн подписчиков на тот момент)
                </a>
                . Из-за отсутствия опыта, на сайте использовался DLE. Мной
                отрисовывался дизайн (на скринах последний, их было 3),
                достаточно простой, чтобы можно было в любой момент дополнять
                функционал сайта. Как модуль, разрабатывался личный кабинет. На
                фронтенде использовался jQuery.
              </p>
              <p>
                Здесь было получено много опыта по верстке, начальный опыт в PHP
                и системном администрировании. Получен иетересный опыт в
                организации онлайн-радио (как с технической стороны, так и в
                создании плеера и вывода мета-информации на сайт: что сейчас
                играет, сколько людей слушают, кто в эфире и т.п).
              </p>
              <div>
                Личный кабинет содержит следующий функционал:
                <ul>
                  <li>Аутентификация через VK</li>
                  <li>Пополнение баланса (через кассу MyKassa)</li>
                  <li>Онлайн-магазин предметов с выдачей по БД серверов</li>
                  <li>Покупка привилегий с выдачей по БД серверов</li>
                  <li>
                    Установка скина и плаща (покупка за валюту сайта для HD
                    качества)
                  </li>
                  <li>
                    Выдача валюты серверов за голосование (интеграция с
                    TopCraft, McTop, McRate, McMonitoring)
                  </li>
                  <li>Кейсы за голосование с выдачей предметов на серверах</li>
                  <li>Банлист с информацией о банах на серверах</li>
                  <li>
                    Установка варпов (точек телепортации на серверах) за валюту
                    сайта
                  </li>
                  <li>Создание клана за валюту сайта</li>
                  <li>Обмен валюты сайта на валюту сервера</li>
                  <li>Банпанель</li>
                  <li>Панель радиоведущего</li>
                  <li>Быстрые уведомления</li>
                  <li>Раздел админки в DLE</li>
                  <li>Расширение прав DLE под ЛК</li>
                  <li>Логгирование действий</li>
                </ul>
              </div>

              <p class="mt-3">На данный момент сайт не работает.</p>

              <div>
                <a
                  href="https://web.archive.org/web/20171015110052/https://mine-play.ru/"
                  class="btn btn-interface btn-sm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Web архив сайта
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mt-3 mt-md-0">
            <viewer class="freelance__images">
              <img
                v-for="i in 6"
                :key="`mineplay-image-${i}`"
                :src="`/static/images/fl/mineplay/mineplay${i}.webp`"
              />
            </viewer>
          </div>
        </div>
      </template>
    </TimelineItem>
  </Timeline>
</template>

<script>
export default {
  components: {
    Timeline: () => import('~/components/CV/Timeline'),
    TimelineItem: () => import('~/components/CV/TimelineItem'),
  },
  computed: {
    gambl() {
      return this.$route.query?.g === 'true'
    },
  },
}
</script>

<style lang="scss">
.freelance__images {
  img {
    width: 100%;
    display: block;
    margin-bottom: 15px;
    cursor: zoom-in;
    border-radius: 8px;
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4);
    transition: 0.2s ease;
    z-index: 1;

    &:hover {
      // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0);
      transform: scale(1.03);
      z-index: 5;
    }
  }
}
</style>
