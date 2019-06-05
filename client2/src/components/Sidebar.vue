<template lang="pug">
  b-nav.sidebar(vertical :class='{ open: sidebarOpen }')
    b-nav-text Essential Links
    b-nav-item(href='https://vuejs.org' target='_blank') Core Docs
    b-nav-item(href='https://forum.vuejs.org' target='_blank') Forum
    b-nav-item(href='https://chat.vuejs.org' target='_blank') Community Chat
    b-nav-item(href='https://twitter.com/vuejs' target='_blank') Twitter
    b-nav-item(href='http://vuejs-templates.github.io/webpack/' target='_blank') Docs for This Template

    b-nav-text Essential Links
    b-nav-item(href='http://router.vuejs.org/' target='_blank') vue-router
    b-nav-item(href='http://vuex.vuejs.org/' target='_blank') vuex
    b-nav-item(href='http://vue-loader.vuejs.org/' target='_blank') vue-loader
    b-nav-item(href='https://github.com/vuejs/awesome-vue' target='_blank') awesome-vue
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
@use postcss-cssnext;
:root {
  --trans: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  --hidey: -1000px;
}
.sidebar {
  background: whitesmoke;
  transition: var(--trans);
  transform: translate(var(--hidey), 0);
  position: fixed;
  height: 100%;
}
.open {
  transform: translate(0, 0);
}
</style>