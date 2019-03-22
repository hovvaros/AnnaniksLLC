<template>
  <div>
    <div class="navbar row no-gutters dis_center">
      <div class="navbar_logo">
        <img src="./../../../assets/Annaniks_logo.png" class="width_logo" alt>
      </div>

      <div @click="burgerEmit" class="displey_lg_none icon_burger">
        <i class="icon-burger"></i>
      </div>

      <div class="navbar_item displey_none">
        <a href="#">About us</a>
        
        <a href="#service">Servise</a>
        
        <a href="#ourTeam">our advantegs</a>
        
        <a href="#portfolio">Portfolio</a>
        
        <a href="#stuff">Stuff</a>
        
        <a href="#contact">Contacts</a>
      </div>
    </div>
  </div>
</template>

<script src='./ann-navbar.js'></script>
<style src='./ann-navbar.css'></style>
