<template>
  <div>
    <form class="ui form" v-on:submit="saveForm">
      <router-link class="item" to="/profile/xxxxxxxx">xxxxxxxx</router-link>
      <div class="two fields">
        <div class="field error">
          <label>First Name</label>
          <input placeholder="First Name" type="text" v-model="form.fname">
        </div>
        <div class="field">
          <label>Last Name</label>
          <input placeholder="Last Name" type="text" v-model="form.lname">
        </div>
      </div>
      <div class="field error">
        <label>Gender</label>
        <div class="ui selection dropdown">
          <div class="default text">Select</div>
          <i class="dropdown icon"></i>
          <input type="hidden" name="gender">
          <div class="menu">
            <div class="item" data-value="male">Male</div>
            <div class="item" data-value="female">Female</div>
          </div>
        </div>
      </div>
      <div class="inline field error">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit">Save</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    saveForm(e) {
      e.preventDefault();
      const data = this.form;
      alert("data :: " + JSON.stringify(data));
      axios.get("xxxxxxxxxxxxxxxxxxx", data).then(http => {
        console.log("http ::==", http);
      });
    }
  }
};
</script>