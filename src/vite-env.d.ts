/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // The `any` here is a fallback; in a real project, you might want to be more specific.
  const component: DefineComponent<{}, {}, any>
  export default component
}
