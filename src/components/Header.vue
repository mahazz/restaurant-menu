<template>
  <div>
    <div id="Nav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <span class="mobile-btn" @click="openNav()">&#9776;</span>
  </div>
  <!-- <header>
    <img alt="Vue logo" src="../assets/logo.png" height="50" />
    <p>My Vue.js Application</p>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>-->
</template>

<script>
export default {
  name: "Header",
  data() {},
  methods: {
    openNav() {
      document.getElementById("Nav").style.height = "100%";
    },

    closeNav() {
      document.getElementById("Nav").style.height = "0%";
    }
  }
};
</script>

<style lang="scss">
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;

  p {
    margin-left: 1rem;
  }
}

nav {
  margin-left: auto;

  ul {
    list-style: none;
  }

  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
}
.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #5b5b5b;
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #cecccc;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 0px;
  right: 5px;
  font-size: 60px;
  float: right;
}

@media screen and (max-height: 450px) {
  .overlay {
    overflow-y: auto;
  }
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
.mobile-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  float: right;
  color: #fff;
}
</style>
