<template>
  <div class="backgroun">
    <div :class="{'obsaluteBackgroun':navigationDrawer}"></div>
    <v-navigation-drawer class="mt100" app v-model="navigationDrawer" gradient temporary>
      <div class="leftNavbar">
        <a href="#">
          <div>
            <a href="#">About us</a>
          </div>
        </a>
        <a href="#service">
          <div>
            <a>Servise</a>
          </div>
        </a>
        <a href="#ourTeam">
          <div>
            <a>our advantegs</a>
          </div>
        </a>
        <a href="#portfolio">
          <div>
            <a>Portfolio</a>
          </div>
        </a>
        <a href="#stuff">
          <div>
            <a>Stuff</a>
          </div>
        </a>
        <a href="#contact">
          <div>
            <a>Contacts</a>
          </div>
        </a>
      </div>
    </v-navigation-drawer>

    <ann-navbar v-on:burgerEmit="navigationDrawer=!navigationDrawer"></ann-navbar>
    <ann-about-us></ann-about-us>
    <ann-content></ann-content>
    <ann-footer></ann-footer>
  </div>
</template>

<script src='./ann-home-page.js'></script>
<style src='./ann-home-page.css'></style>
<style src='./ann-global.css'></style>
<style src='./../font/mediaScreen.css'></style>