<template>
  <!--Navbar-->
  <mdb-navbar color="indigo" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      <img src="../assets/logo.png" style="width: 180px; margin-right: 5px">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <!-- Dropdown -->
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Top 10 Film</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Per Like</mdb-dropdown-item>
            <mdb-dropdown-item>Per Voto</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item href="#">Cast</mdb-nav-item>
        <mdb-nav-item href="#">Budget</mdb-nav-item>
      </mdb-navbar-nav>
      <!-- Search form -->
      <mdb-form-inline>
        <mdb-input type="text" placeholder="Search" aria-label="Search"/>
      </mdb-form-inline>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import 'mdbvue/build/css/mdb.css';
import {mdbNavbar, mdbNavbarBrand, 
        mdbNavbarToggler, mdbNavbarNav, 
        mdbDropdown,mdbDropdownToggle, 
        mdbDropdownMenu, mdbDropdownItem, 
        mdbNavItem, mdbFormInline, mdbInput} from 'mdbvue';

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbNavItem,
    mdbFormInline, 
    mdbInput
  },
  props: {
    msg: String
  }
};
</script>