import Vue from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});