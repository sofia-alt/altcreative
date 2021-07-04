<template>
<nav class="nav">
  <ul class="nav__list">
    <li v-for="(route, index) in routes" :key="index" class="nav__item">
      <router-link
        :to="route.componentName ? {name: route.componentName} : route.pagePath"
        active-class="is-active"
        class="nav__link"
      >
          {{ route.title }}
      </router-link>
    </li>
  </ul>
</nav>
<div class="component">
  <router-view></router-view>
</div>
</template>

<script>
import { shallowRef } from '@vue/reactivity'

export default {
name: 'MainLayout',
setup () {
  const routes = shallowRef([
    {
      componentName: 'HomePage',
      pagePath: '',
      title: 'Главная'
    },
    {
      componentName: 'PortfolioPage',
      pagePath: '',
      title: 'Портфолио'
    },
    {
      componentName: 'ShopPage',
      pagePath: '',
      title: 'Услуги'
    },
    {
      componentName: 'ContactsPage',
      pagePath: '',
      title: 'Контакты'
    },
    {
      componentName: 'BlogPage',
      pagePath: '',
      title: 'Блог'
    }
  ])

  return {
    routes
  }
}
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
