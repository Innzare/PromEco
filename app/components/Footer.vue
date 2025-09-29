<script lang="ts" setup>
const FOOTER_NAV = [
  {
    title: 'Информация',
    list: [
      { icon: null, text: 'О компании', path: '/about', type: null },
      { icon: null, text: 'Продукция', path: '/products', type: null },
      { icon: null, text: 'Лаборатория', path: '/lab', type: null },
      { icon: null, text: 'Логистика', path: '/logistic', type: null },
      { icon: null, text: 'Контакты', path: '/contacts', type: null }
    ]
  },

  {
    title: 'Продукция',
    list: [
      { icon: null, text: 'Присадки для топлив', path: '/products, type: null' },
      { icon: null, text: 'Присадки для смазочных материалов', path: '/products', type: null },
      { icon: null, text: 'Реагенты', path: '/products', type: null },
      { icon: null, text: 'Полимерные добавки', path: '/products', type: null },
      { icon: null, text: 'Крупнотоннажная химия', path: '/products', type: null }
    ]
  },

  {
    title: 'Контакты',
    list: [
      { icon: 'i-lucide-at-sign', text: 'info@prom-eko.ru', path: 'mailto:info@prom-eko.ru', type: 'email' },
      {
        icon: 'i-lucide-map-pin',
        text: 'Москва, Летниковская, 11/10, стр. 12, Помещение IV',
        path: 'https://yandex.ru/maps/213/moscow/house/letnikovskaya_ulitsa_11_10s26/Z04YcANmT0UBQFtvfXtzcnVnZg==/?ll=37.653121%2C55.723495&z=15.25',
        type: 'location'
      },
      { icon: 'i-lucide-phone', text: '+7 (495) 795-04-37', path: 'tel:+74957950437', type: 'tel' },
      { icon: 'i-lucide-phone', text: '+7 (495) 795-04-38', path: 'tel:+74957950437', type: 'tel' }
    ]
  }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="logo-wrapper">
          <div class="logo">
            <NuxtLink to="/">
              <img src="~/assets/img/logo.webp" alt="logo" class="w-[200px]" />
            </NuxtLink>

            <p>Полный цикл: от лаборатории до внедрения</p>
          </div>

          <Button class="logo-wrapper__download-btn" size="small"> Скачать презентацию </Button>
        </div>

        <nav class="footer-nav">
          <div v-for="item in FOOTER_NAV" :key="item.title">
            <p class="footer-nav__title">{{ item.title }}</p>

            <ul class="footer-nav__list">
              <NuxtLink
                :to="listItem.path"
                v-for="(listItem, index) in item.list"
                :key="index"
                class="footer-nav__link"
                :target="listItem?.type === 'location' ? '_blank' : '_self'"
              >
                <Icon class="footer-nav__link-icon" :name="listItem.icon" v-if="listItem?.icon" />

                <li>{{ listItem.text }}</li>
              </NuxtLink>
            </ul>

            <Button v-if="item.title === 'Контакты'" class="footer-nav__download-btn" size="small">
              Скачать презентацию
            </Button>
          </div>
        </nav>
      </div>

      <p class="copyright">ПромЭко © 2006–{{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--color-black-50);
  padding-block: 2rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

.logo-wrapper {
  display: flex;
  gap: 2rem;
  max-width: 290px;

  .logo {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__download-btn {
    display: none;

    @media (max-width: 1024px) {
      display: flex;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 32px;
  max-width: 60%;

  @media (max-width: 1024px) {
    max-width: 100%;
    flex-wrap: wrap;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 16px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.15s;

    &-icon {
      flex-shrink: 0;
    }

    &:hover {
      color: var(--color-red);
    }
  }

  &__title {
    text-transform: uppercase;
    color: var(--color-gray-400);
    margin-bottom: 32px;

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  }

  &__download-btn {
    margin-top: 32px;

    @media (max-width: 1024px) {
      display: none;
    }
  }
}

.copyright {
  color: var(--color-gray-400);
  margin-top: 2rem;
}
</style>
