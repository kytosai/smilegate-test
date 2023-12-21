import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import IndieGameView from "@/views/IndieGameView.vue";
import EntryGameView from "@/views/EntryGameView.vue";
import CommunityView from "@/views/CommunityView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/indie-game",
    name: "indieGame",
    component: IndieGameView,
  },
  {
    path: "/",
    name: "home",
    component: EntryGameView,
  },
  {
    path: "/",
    name: "home",
    component: CommunityView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
