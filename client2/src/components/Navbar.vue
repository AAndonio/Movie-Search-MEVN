<template>
  <!--Navbar-->
  <mdb-navbar color="#FFD700" dark style="height: 80px z-index: 1100; background: gold;">
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
        <mdb-nav-item href="/topten" active style="font-weight: bold">Top Ten</mdb-nav-item>
        <mdb-nav-item href="/cast" style="font-weight: bold">Cast</mdb-nav-item>
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
.ripple-parent {
  font-weight: bold !important;
}
.navbar.navbar-dark .navbar-nav .nav-item .nav-link {
  color: darkred !important;
}
.navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover {
  color: red !important;
}
.navbar.navbar-dark .navbar-toggler {
  color: darkred !important;
  background-color: darkred !important;
}
</style>
