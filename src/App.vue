<template>
  <div id="layout__container">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      return ( this.$route.meta.layout || 'default' ) + '-layout'
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.button.primary {
    text-decoration: none;
    color: white;
    font-weight: bold;
    letter-spacing: 0.125em;
    font-size: 16px;
    padding: 14px 20px 14px 20px;
    border-radius: 32px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    background-image: linear-gradient(to right top, #38d39f, #32dba5, #2be2aa, #20eab0, #0ef2b6);
    -webkit-box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.2);
    -moz-box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.2);
    box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.2);
}

.button.primary:hover {
    -webkit-box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.4);
    -moz-box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.4);
    box-shadow: 13px 10px 32px 0px rgba(0,255,188,0.4);
}

.button.secondary {
    text-decoration: none;
    color: white;
    font-weight: bold;
    letter-spacing: 0.125em;
    font-size: 16px;
    padding: 14px 20px 14px 20px;
    border-radius: 32px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    background-image: linear-gradient(to right top, #d3d3d3, #d9d9d9, #dfdfdf, #e5e5e5, #ebebeb);
    -webkit-box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.2);
    -moz-box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.2);
    box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.2);
}

.button.secondary:hover {
    -webkit-box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.4);
    -moz-box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.4);
    box-shadow: 13px 10px 32px 0px rgba(199, 199, 199, 0.4);
}
</style>
