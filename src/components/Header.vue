<template>
  <div>
    <img src="../assets/profile.jpg" class="profile" alt="Profile Picture">
    <div class="header">Felix Wu</div>
    <p class="bio">
      {{this.bio}}
      <br>
      <br>
      felixxwu@gmail.com
    </p>
    <br>
    <a href="https://github.com/felixxwu" target="_blank" rel="noopener">
      <img src="../assets/github.svg" class="link" alt="GitHub">
    </a>
    <a href="https://www.linkedin.com/in/felixxwu" target="_blank" rel="noopener">
      <img src="../assets/linkedin.svg" class="link" alt="LinkedIn">
    </a>
    <a href="https://felixwu.me/cv/" target="_blank">
      <img src="../assets/cv.svg" class="link" alt="CV">
    </a>
  </div>
</template>

<script>
import data from '../data/data'

export default {
  data() {
    return {
      bio: data.bio
    }
  },
}
</script>

<style scoped>
.profile {
  width: var(--profileWidth);
  border-radius: 100%;
  box-shadow: var(--boxShadow);
}

.bio {
  max-width: 500px;
  margin: auto;
  color: var(--black);
  /* padding: 10px; */
}

.link {
  width: 45px;
  margin: 15px;
  filter: brightness(0.2);
}
</style>