<template>
  <Page>
    <ActionBar :title="message"></ActionBar>

    <GridLayout>
      <StackLayout>
        <Label class="info">
          <FormattedString>
            <Span class="fas" text.decode="&#xf135; " />
            <Span :text="message" />
          </FormattedString>
        </Label>
        <Button text="Exercises" @tap="$navigateTo(exercisesPage)" />
        <Button text="Workouts" @tap="$navigateTo(workoutsPage)" />
        <Button text="Analysis" @tap="$navigateTo(analysisPage)" />
        <Button text="BodyTracker" @tap="$navigateTo(bodyTrackerPage)" />
        <Button text="Calendar" @tap="$navigateTo(calendarPage)" />
        <Button text="Goals" @tap="$navigateTo(goalsPage)" />
        <Button text="Records" @tap="$navigateTo(recordsPage)" />
        <Button text="Settings" @tap="$navigateTo(settingsPage)" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Exercises from "./Exercises";
import Workouts from "./Workouts";
import Analysis from "./Analysis";
import BodyTracker from "./BodyTracker";
import Calendar from "./Calendar";
import Goals from "./Goals";
import Records from "./Records";
import Settings from "./Settings";

export default {
  name: "Home",
  components: {
    Exercises,
    Workouts
  },
  data() {
    return {
      exercisesPage: Exercises,
      workoutsPage: Workouts,
      analysisPage: Analysis,
      bodyTrackerPage: BodyTracker,
      calendarPage: Calendar,
      goalsPage: Goals,
      recordsPage: Records,
      settingsPage: Settings
    };
  },
  methods: {
    isHomePage() {
      return true;
      // this.$
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
</style>
