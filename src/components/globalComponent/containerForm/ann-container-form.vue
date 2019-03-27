<template>
  <div class="container_form">
    <div class="form_top_text">
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        .
      </span>
    </div>
    <div class="col-md-6 row flex_column nor-gutters">
      <!-- <input type="text" class="name_inpute  width100media" placeholder="First Name" name id> -->
      <v-text-field
        v-model="firstname"
        :rules="nameRules"
        :counter="10"
        label="First name"
        required
      ></v-text-field>
      <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

       <v-text-field v-model="phone"  label="Phone Number"  required></v-text-field>

      <!-- <textarea rows="10" cols="45" class="input_text width100media" label="Message" placeholder=""></textarea> -->

        <v-textarea
        class="textarea"
          name="input-7-1"
          label="Message"
          :countri=5
          v-model="textarea"
        ></v-textarea>
      <div class="button_block">
        <div @click="postFormData" class="button">
          <span>Submit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./ann-container-form.js'></script>
<style src='./ann-container-form.css'></style>
