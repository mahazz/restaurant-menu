<template>
  <!-- <div>
    <h6 class="copyright">copyright</h6>
  </div>-->
  <div class="footer">
    <p>
      <span>
        <strong>&copy; Copyright 2021 Maha A.lzahrani</strong>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  text-align: center;
  width: 100%;
  height: 28px;
}

.footer p {
  color: #adadad;
  font-size: 15px;
  margin: 2px auto 0 auto;
}
</style>