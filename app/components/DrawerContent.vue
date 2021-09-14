<template lang="html">
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <StackLayout row="0" class="nt-drawer__header">
      <Image
        class="nt-drawer__header-image fas t-24"
        src.decode="font://&#xf2bd;"
      />
      <Label class="nt-drawer__header-brand" text="User Name" />
      <Label class="nt-drawer__header-footnote" text="username@mail.com" />
    </StackLayout>

    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Home' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Home)"
        >
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
          <Label col="1" text="Home" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Routines' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Routines)"
        >
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far" />
          <Label col="1" text="Routines" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Workouts' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Workouts)"
        >
          <Label col="0" text.decode="&#xf002;" class="nt-icon fas" />
          <Label col="1" text="Workouts" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Exercises' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Exercises)"
        >
          <Label col="0" text.decode="&#xf44b;" class="nt-icon fas" />
          <Label col="1" text="Exercises" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Calendar' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Calendar)"
        >
          <Label col="0" text.decode="&#xf273;" class="nt-icon fas" />
          <Label col="1" text="Calendar" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Analysis' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Analysis)"
        >
          <Label col="0" text.decode="&#xf201;" class="nt-icon fas" />
          <Label col="1" text="Analysis" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'BodyTracker' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(BodyTracker)"
        >
          <Label col="0" text.decode="&#xf21e;" class="nt-icon fas" />
          <Label col="1" text="Body Tracker" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Goals' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Goals)"
        >
          <Label col="0" text.decode="&#xf140;" class="nt-icon fas" />
          <Label col="1" text="Goals" class="p-r-10" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Records' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Records)"
        >
          <Label col="0" text.decode="&#xf559;" class="nt-icon fas" />
          <Label col="1" text="Personal Records" class="p-r-10" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout
          columns="auto, *"
          :class="
            'nt-drawer__list-item' +
              (selectedPage === 'Settings' ? ' -selected' : '')
          "
          @tap="onNavigationItemTap(Settings)"
        >
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas" />
          <Label col="1" text="Settings" class="p-r-10" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import Home from "../pages/Home";
import Routines from "../pages/Routines";
import Workouts from "../pages/Workouts";
import Exercises from "../pages/Exercises";
import Analysis from "../pages/Analysis";
import BodyTracker from "../pages/BodyTracker";
import Calendar from "../pages/Calendar";
import Goals from "../pages/Goals";
import Records from "../pages/Records";
import Settings from "../pages/Settings";

import * as utils from "~/shared/utils";
import { SelectedPageService } from "~/shared/selected-page-service";

export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      selectedPage => (this.selectedPage = selectedPage)
    );
  },
  data() {
    return {
      Home: Home,
      Routines: Routines,
      Workouts: Workouts,
      Exercises: Exercises,
      Analysis: Analysis,
      BodyTracker: BodyTracker,
      Calendar: Calendar,
      Goals: Goals,
      Records: Records,
      Settings: Settings,
      selectedPage: ""
    };
  },
  components: {
    Home,
    Routines,
    Workouts,
    Exercises,
    Analysis,
    BodyTracker,
    Calendar,
    Goals,
    Records,
    Settings
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      });
      utils.closeDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
.fas {
  font-size: 40px;
}
</style>
