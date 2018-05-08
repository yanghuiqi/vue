import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";
import express from "@/components/Express";
import tolist from "@/components/Todolist";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/",
      name: "express",
      component: () => import("../components/Express.vue")
    },
    {
      path: "/todolist",
      name: "todolist",
      component: () => import("../components/Todolist.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
