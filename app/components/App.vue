<template>
  <Page class="ns-dark">
    <ActionBar :title="message">
      <ActionItem
        @tap="onTapHamburger()"
        ios.systemIcon="4"
        icon="res://ic_baseline_menu_white_24"
        ios.position="left"
      />
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent>
        <Label class="drawer-header" text="Drawer" />

        <Label class="drawer-item" text="Item 1" />
        <Label class="drawer-item" text="Item 2" />
        <Label class="drawer-item" text="Item 3" />
      </StackLayout>

      <GridLayout ~mainContent>
        <StackLayout>
          <!-- <Label class="info">
            <FormattedString>
              <Span class="fas" text.decode="&#xf135; " />
              <Span :text="message" />
            </FormattedString>
          </Label> -->
          <GridLayout columns="*, *, *" rows="auto, auto, auto">
            <Button
              text="Routines"
              @tap="$navigateTo(links.Routine)"
              height="100"
              row="0"
              column="0"
            />
            <Button
              text="Workouts"
              @tap="$navigateTo(links.Workouts)"
              height="100"
              row="0"
              column="1"
            />
            <Button
              text="Exercises"
              @tap="$navigateTo(links.Exercises)"
              height="100"
              row="0"
              column="2"
            />
            <Button
              text="Analysis"
              @tap="$navigateTo(links.Analysis)"
              height="100"
              row="1"
              column="0"
            />
            <Button
              text="Body Tracker"
              @tap="$navigateTo(links.BodyTracker)"
              height="100"
              row="1"
              column="1"
            />
            <Button
              text="Calendar"
              @tap="$navigateTo(links.Calendar)"
              height="100"
              row="1"
              column="2"
            />
            <Button
              text="Goals"
              @tap="$navigateTo(links.Goals)"
              height="100"
              row="2"
              column="0"
            />
            <Button
              text="Records"
              @tap="$navigateTo(links.Records)"
              height="100"
              row="2"
              column="1"
            />
            <Button
              text="Settings"
              @tap="$navigateTo(links.Settings)"
              height="100"
              row="2"
              column="2"
            />
          </GridLayout>
        </StackLayout>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
import Routine from "./Routine";
import Workouts from "./Workouts";
import Exercises from "./Exercises";
import Analysis from "./Analysis";
import BodyTracker from "./BodyTracker";
import Calendar from "./Calendar";
import Goals from "./Goals";
import Records from "./Records";
import Settings from "./Settings";

export default {
  name: "Home",
  components: {
    Routine,
    Exercises,
    Workouts,
    Analysis,
    BodyTracker,
    Goals,
    Records,
    Settings
    // RadSideDrawer
  },
  data() {
    return {
      msg: "Hello there world",
      links: {
        Routine,
        Exercises,
        Workouts,
        Analysis,
        BodyTracker,
        Goals,
        Records,
        Settings
      },
      pages: [
        {
          id: 0,
          name: "Exercises",
          component: Exercises,
          items: [
            {
              id: 1,
              name: "Barbell Squat",
              type: "resistance",
              region: "lower_body",
              muscleGroup: "lower_body",
              muscles: ["quadriceps", "glutimus_maximus", "hamstrings"]
            },
            {
              id: 2,
              name: "Deadlift",
              type: "resistance",
              region: "lower_body",
              settings: {
                weight_kg: 0.0,
                weight_lbs: 0.0,
                reps: 0
              },
              muscleGroup: "lower_body",
              muscles: ["quadriceps", "glutimus_maximus", "lower_back"]
            },
            {
              id: 3,
              name: "Leg Press",
              type: "resistance",
              region: "lower_body",
              muscleGroup: "legs",
              muscles: ["quadriceps", "glutimus_maximus", "hamstrings"],
              settings: {
                weight_kg: 0.0,
                weight_lbs: 0.0,
                reps: 0
              }
            },
            {
              id: 4,
              name: "Barbell Bench Press",
              type: "resistance",
              region: "upper_body",
              muscleGroup: "chest",
              muscles: ["chest", "triceps"],
              settings: {
                weight_kg: 0.0,
                weight_lbs: 0.0,
                reps: 0
              }
            },
            {
              id: 5,
              name: "Treadmill",
              type: "cardio",
              settings: {
                incline: 0.0,
                duration: 0.0, // seconds
                distance_km: 0.0,
                distance_mi: 0.0
              }
            },
            {
              id: 6,
              name: "Standing Dumbbell Curls",
              type: "resistance",
              region: "upper_body",
              muscleGroup: "arms",
              settings: {
                weight_kg: 0.0,
                weight_lbs: 0.0,
                reps: 0
              }
            }
          ]
        },
        {
          id: 1,
          name: "Workouts",
          component: Workouts
        },
        {
          id: 2,
          name: "Analysis",
          component: Analysis
        },
        {
          id: 3,
          name: "BodyTracker",
          component: BodyTracker
        },
        {
          id: 4,
          name: "Calendar",
          component: Calendar
        },
        {
          id: 5,
          name: "Goals",
          component: Goals
        },
        {
          id: 6,
          name: "Records",
          component: Records
        },
        {
          id: 7,
          name: "Settings",
          component: Settings
        }
      ]
    };
  },
  methods: {
    isHomePage() {
      return true;
    },
    onItemTap(e) {
      console.log("Tapped an item!");
      console.log(e.index);
      console.log(e.item);
    },
    getComponentByName(compName) {
      return this.components.filter(c => c.name === compName);
    },
    onTapHamburger() {
      if (!this.$refs.drawer.nativeView.getIsOpen()) {
        this.$refs.drawer.nativeView.showDrawer();
      } else {
        this.$refs.drawer.nativeView.closeDrawer();
      }
    }
  },
  computed: {
    message() {
      return "Home";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  margin-top: 20;
  margin-bottom: 10;
  horizontal-align: center;
  vertical-align: center;
}

.ns-dark .drawer-header,
.ns-dark .drawer-item {
  color: #fff;
}
</style>
