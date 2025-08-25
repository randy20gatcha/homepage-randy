import { createRouter, createWebHistory } from "vue-router"

const components = {
  HOME: () => import("../layouts/DefaultLayout.vue"),
  BUILDS_FITOUTS: () => import("../views/BuildsFitOuts.vue"),
  SERVICES: () => import("../views/Services.vue"),
  DESIGN_ENGINEERING: () => import("../views/DesignEngineering.vue"),
  MANUFACTURING: () => import("../views/Manufacturing.vue"),
}

export const ROUTE_NAME = {
  HOME: "home",
  BUILDS_FITOUTS: "builds_fitouts",
  SERVICES: "services",
  DESIGN_ENGINEERING: "design_engineering",
  MANUFACTURING: "manufacturing",
}

export const routes = [
  {
    path: "/",
    name: ROUTE_NAME.HOME,
    component: components.HOME
  },
   {
    path: "/builds-fitouts",
    name: ROUTE_NAME.BUILDS_FITOUTS,
    component: components.BUILDS_FITOUTS
  },
  {
    path: "/services",
    name: ROUTE_NAME.SERVICES,
    component: components.SERVICES
  },
  {
    path: "/services/design-engineering",
    name: ROUTE_NAME.DESIGN_ENGINEERING,
    component: components.DESIGN_ENGINEERING
  },
  {
    path: "/services/manufacturing",
    name: ROUTE_NAME.MANUFACTURING,
    component: components.MANUFACTURING
  }
]

const router = createRouter({
  history: createWebHistory("/acmtransport-prototype/"),
  routes
})

export default router
