<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div style="width: 200px; text-align: center">
        <b-link class="navbar-brand" to="#">
          <img class="navbar-brand-full" src="img/brand/Movie Search.png" width="150" alt="CoreUI Logo">
          <img class="navbar-brand-minimized" src="img/brand/Sygnet.png" width="30" height="30" alt="CoreUI Logo">
        </b-link> 
      </div>
      <div style="display: inherit; margin-right: auto">
        <SidebarToggler class="d-md-down-none" display="lg" />
        <b-navbar-nav class="d-md-down-none">
          <b-nav-item class="px-3" to="/dashboard">Home</b-nav-item>
          <b-nav-item class="px-3" to="/users" exact>Top 10 Film</b-nav-item>
          <b-nav-item class="px-3">Cast</b-nav-item>
          <b-nav-item class="px-3">Profitti</b-nav-item>
          <b-nav-item-dropdown text="Cerca" right>
            <b-dropdown-item>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Cerca per nome"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Cerca per parola chiave"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div style="display: inherit">
        <p>Basi Dati 2</p>
        <span class="ml-1">&copy; 2019 Claudio Amato & Antonio Vivone.</span>
      </div> 
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
