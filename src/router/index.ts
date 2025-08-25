import { createRouter, createWebHistory } from "vue-router"

const components = {
  HOME: () => import("../layouts/DefaultLayout.vue"),
  SERVICES: () => import("../views/Services.vue"),
  DESIGN_ENGINEERING: () => import("../views/components/DesignEngineering.vue"),
}

export const ROUTE_NAME = {
  HOME: "home",
  SERVICES: "services",
  DESIGN_ENGINEERING: "design_engineering"
}

export const routes = [
  {
    path: "/home",
    name: ROUTE_NAME.HOME,
    component: components.HOME
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
  }
]

const router = createRouter({
  history: createWebHistory("/acmtransport-prototype/"),
  routes
})

export default router
