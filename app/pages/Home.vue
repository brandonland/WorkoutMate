<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <GridLayout columns="*, 50">
        <Label class="action-bar-title" text="Home" colSpan="2" col="0" />
        <Label
          class="fas hamburger"
          text.decode="&#xf0c9;"
          col="2"
          @tap="onDrawerButtonTap"
        />
      </GridLayout>
    </ActionBar>
    <GridLayout class="page__content">
      <GridLayout
        class="page-title-area"
        marginTop="5"
        marginLeft="15"
        height="75"
        verticalAlign="top"
        horizontalAlign="top"
      >
        <FlexBoxLayout justifyContent="center" alignItems="center">
          <Label class="page__content-icon fas" text.decode="&#xf015;" />
          <Label class="page__content-placeholder" :text="message" />
        </FlexBoxLayout>
      </GridLayout>
      <GridLayout marginTop="75" columns="*, *, *" rows="auto, auto, auto">
        <Button
          text="Routines"
          @tap="onNavigationItemTap(Routines)"
          height="100"
          row="0"
          column="0"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Workouts"
          @tap="onNavigationItemTap(Workouts)"
          height="100"
          row="0"
          column="1"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Exercises"
          @tap="onNavigationItemTap(Exercises)"
          height="100"
          row="0"
          column="2"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Analysis"
          @tap="onNavigationItemTap(Analysis)"
          height="100"
          row="1"
          column="0"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Body Tracker"
          @tap="onNavigationItemTap(BodyTracker)"
          height="100"
          row="1"
          column="1"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Calendar"
          @tap="onNavigationItemTap(Calendar)"
          height="100"
          row="1"
          column="2"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Goals"
          @tap="onNavigationItemTap(Goals)"
          height="100"
          row="2"
          column="0"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Records"
          @tap="onNavigationItemTap(Records)"
          height="100"
          row="2"
          column="1"
          backgroundColor="rgba(255,255,255,0.05)"
        />
        <Button
          text="Settings"
          @tap="onNavigationItemTap(Settings)"
          height="100"
          row="2"
          column="2"
          backgroundColor="rgba(255,255,255,0.05)"
        />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Routines from "./Routines";
import Workouts from "./Workouts";
import Exercises from "./Exercises";
import Analysis from "./Analysis";
import BodyTracker from "./BodyTracker";
import Calendar from "./Calendar";
import Goals from "./Goals";
import Records from "./Records";
import Settings from "./Settings";

import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

export default {
  data() {
    return {
      Routines: Routines,
      Workouts: Workouts,
      Exercises: Exercises,
      Analysis: Analysis,
      BodyTracker: BodyTracker,
      Calendar: Calendar,
      Goals: Goals,
      Records: Records,
      Settings: Settings
    };
  },
  components: {
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
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
  },
  // data() {
  //   return {}
  // },
  computed: {
    message() {
      return "Home Page";
    }
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true
      });
      utils.closeDrawer();
    },
    isDarkTheme() {
      return this.$store.state.isDarkTheme;
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
// .fas.hamburger {
//   font-size: 22px;
//   font-weight: normal;
//   margin-right: 5;
// }
</style>
