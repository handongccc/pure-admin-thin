import { frame } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

export default {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "外部页面",
    rank: frame
  },
  children: [
    {
      path: "/iframe/pure",
      name: "FramePure",
      meta: {
        title: "平台文档（内嵌）",
        frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/external",
      name: "https://yiming_chang.gitee.io/pure-admin-doc",
      meta: {
        title: "平台文档（外链）",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/ep",
      name: "FrameEp",
      meta: {
        title: "Element Plus 文档（内嵌）",
        frameSrc: "https://element-plus.org/zh-CN/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue3",
      name: "FrameVue",
      meta: {
        title: "Vue3 文档（内嵌）",
        frameSrc: "https://cn.vuejs.org/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vite",
      name: "FrameVite",
      meta: {
        title: "Vite 文档（内嵌）",
        frameSrc: "https://cn.vitejs.dev/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/pinia",
      name: "FramePinia",
      meta: {
        title: "Pinia 文档（内嵌）",
        frameSrc: "https://pinia.vuejs.org/zh/index.html",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue-router",
      name: "FrameRouter",
      meta: {
        title: "Vue Router 文档（内嵌）",
        frameSrc: "https://router.vuejs.org/zh/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/tailwindcss",
      name: "FrameTailwindcss",
      meta: {
        title: "Tailwindcss 文档（内嵌）",
        frameSrc: "https://tailwindcss.com/docs/installation",
        roles: ["admin", "common"]
      }
    }
  ]
} as RouteConfigsTable;
