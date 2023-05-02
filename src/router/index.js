import { createRouter, createWebHistory } from "vue-router";
import Process from "@/views/Process";
import Box from "@/views/Process/concrete/Box";
import Filler from "@/views/Process/concrete/Filler";
import Bag from "@/views/Process/concrete/Bag";
import Tape from "@/views/Process/concrete/Tape";
const routes = [
  {
    path: "/",
    component: Process,
    meta: {
      title: "绿箱循——知识科普"
    }
  },
  {
    path: "/process",
    component: Process,
    meta: {
      title: "绿箱循——知识科普"
    }
  },
  {
    path: "/process/tape",
    component: Tape,
    meta: {
      title: "绿箱循——胶带"
    }
  },
  {
    path: "/process/bag",
    component: Bag,
    meta: {
      title: "绿箱循——塑料袋"
    }
  },
  {
    path: "/process/box",
    component: Box,
    meta: {
      title: "绿箱循——纸箱"
    }
  },
  {
    path: "/process/filler",
    component: Filler,
    meta: {
      title: "绿箱循——缓冲气柱袋"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
