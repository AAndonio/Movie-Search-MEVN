<template>
  <!--Navbar-->
  <mdb-navbar color="#FFD700" dark style="height: 80px z-index: 1100;">
    <!-- Navbar brand -->
    <mdb-navbar-brand href="/">
      <a href="/">
        <img src="../assets/logo.png" style="width: 180px">
      </a>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/" active style="font-weight: bold">Home</mdb-nav-item>
        <!-- Dropdown -->
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed style="font-weight: bold">Top 10 Film</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item style="font-weight: bold">Per Like</mdb-dropdown-item>
            <mdb-dropdown-item style="font-weight: bold">Per Voto</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item href="#" style="font-weight: bold">Cast</mdb-nav-item>
        <mdb-nav-item href="#" style="font-weight: bold">Budget</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import "mdbvue/build/css/mdb.css";
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbNavItem
} from "mdbvue";

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
    mdbNavItem
  },
  props: {
    msg: String
  }
};
</script>

<style>
.navbar {
  background-color: #ffd700 !important;
}
</style>