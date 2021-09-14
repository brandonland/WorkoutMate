<template>
  <Page class="page" :class="[isDarkTheme ? 'ns-dark' : '']">
    <ActionBar :title="message">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
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

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
      <Label class="description" text="Work in progress" />
    </GridLayout>
    <FlexboxLayout flexDirection="column">
      <Label height="70">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>

      <Button text="Barbell Squat" @tap="$navigateTo(exercisePage)" />
      <Button text="Bench Press" @tap="$navigateTo(exercisePage)" />
      <Button text="Deadlift" @tap="$navigateTo(exercisePage)" />
      <Button text="Kamehameha" @tap="$navigateTo(exercisePage)" />
    </FlexboxLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

import Exercise from "./Exercise";

export default {
  name: "Exercises",
  components: {
    Exercise
  },
  data() {
    return {
      exercisePage: Exercise
    };
  },
  computed: {
    message() {
      return "Exercises";
    }
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Search");
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    isDarkTheme() {
      return this.$store.state.isDarkTheme;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// .fas {
//   @include colorize($color: accent);
// }

.info {
  font-size: 20;
  margin-top: 20;
  margin-bottom: 10;
  horizontal-align: center;
  vertical-align: center;
}
</style>
