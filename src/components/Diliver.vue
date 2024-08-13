<template>
  <div class="contact">
    <h1>{{ $t('nav.tab3') }}</h1>
    <p>{{ $t('home.deliver.desc') }}</p>
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <p>example@gmail.com</p>
      </div>
      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <p>linkedin.com/in/yourprofile</p>
      </div>
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <p>github.com/yourusername</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactTab",
};
</script>