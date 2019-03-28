<template>
  <!-- <div class="container_form">
    <div class="form_top_text">
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        .
      </span>
    </div>
    <div class="col-md-6 row flex_column nor-gutters">
      <input type="text" class="name_inpute  width100media" placeholder="First Name" name id>
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

      <textarea rows="10" cols="45" class="input_text width100media" label="Message" placeholder=""></textarea>

        <v-textarea
        class="textarea"
          name="input-7-1"
          label="Message"
          :countri=5
          v-model="textarea"
        ></v-textarea>
      <div  class="button_block">
        <div @click="postFormData"  class="button">
          <span>Submit</span>
        </div>
      </div>
    </div>
  </div>-->

  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-xs-12   col-md-8   offset-md-4  col-lg-6  offset-lg-6">
          <div class="ml115">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  v-model="user.firstName"
                  v-validate="'required'"
                  id="firstName"
                  name="firstName"
                  class="form-control input"
                  :class="{ 'is-invalid': submitted && errors.has('firstName') }"
                >
                <div
                  v-if="submitted && errors.has('firstName')"
                  class="invalid-feedback"
                >{{ errors.first("firstName") }}</div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  v-model="user.lastName"
                  v-validate="'required'"
                  id="lastName"
                  name="lastName"
                  class="form-control input"
                  :class="{ 'is-invalid': submitted && errors.has('lastName') }"
                >
                <div
                  v-if="submitted && errors.has('lastName')"
                  class="invalid-feedback"
                >{{ errors.first("lastName") }}</div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  v-validate="'required|email'"
                  id="email"
                  name="email"
                  class="form-control input"
                  :class="{ 'is-invalid': submitted && errors.has('email') }"
                >
                <div
                  v-if="submitted && errors.has('email')"
                  class="invalid-feedback"
                >{{ errors.first("email") }}</div>
              </div>

              <div class="form-group">
                <label for="lastName">Phone</label>
                <input
                  type="text"
                  v-model="user.phone"
                  v-validate="'required'"
                  id="Phone"
                  name="Phone"
                  class="form-control input"
                  :class="{ 'is-invalid': submitted && errors.has('Phone') }"
                >
                <div
                  v-if="submitted && errors.has('Phone')"
                  class="invalid-feedback"
                >{{ errors.first("Phone") }}</div>
              </div>

              <div class="form-group">
                <label  for="lastName">Message</label>
                <textarea
                  type="text"
                  v-model="user.Message"
                  v-validate="'required'"
                  id="Message"
                  name="Message"
                  class="form-control textArea"
                  :class="{ 'is-invalid': submitted && errors.has('Message') }"
                ></textarea>
                <div
                  v-if="submitted && errors.has('Message')"
                  class="invalid-feedback"
                >{{ errors.first("Message") }}</div>
              </div>
              <div @submit.prevent="handleSubmit()" class="form-group button_block">
                <button class="btn btn-primary button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script src='./ann-container-form.js'></script>
<style src='./ann-container-form.css'></style>
