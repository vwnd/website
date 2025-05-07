<script setup lang="ts">
import { Box } from "lucide-vue-next";
import { h, ref } from "vue";
import { useSidebar, type SidebarProps } from "../ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Add Model",
      url: "#",
      icon: Box,
      isActive: false,
    },
  ],
};

const activeItem = ref(data.navMain[0]);
const { open } = useSidebar();
open.value = false;
</script>

<template>
  <UiSidebar collapsible="icon">
    <UiSidebarContent>
      <UiSidebarGroup>
        <UiSidebarGroupContent class="px-1.5 md:px-0">
          <UiSidebarMenu>
            <UiSidebarMenuItem v-for="item in data.navMain" :key="item.title">
              <UiSidebarMenuButton
                :tooltip="h('div', { hidden: false }, item.title)"
                :is-active="activeItem?.title === item.title"
                class="px-2.5 md:px-2 cursor-pointer"
                @click="() => {}"
              >
                <component :is="item.icon" />
                <span>{{ item.title }}</span>
              </UiSidebarMenuButton>
            </UiSidebarMenuItem>
          </UiSidebarMenu>
        </UiSidebarGroupContent>
      </UiSidebarGroup>
    </UiSidebarContent>
    <UiSidebarFooter>
      <!-- <NavUser :user="data.user" /> -->
    </UiSidebarFooter>
  </UiSidebar>
</template>
