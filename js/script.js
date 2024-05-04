var Toggle = Vue.extend({
    template: '#toggle',
    props: ['toggled','label']
  });
  Vue.component('vue-toggle', Toggle)
  
  new Vue({
    el: '#app',
    data: {
      toggled_1: 1,
      toggled_2: 0,
      toggled_3: 0,
    }
  });