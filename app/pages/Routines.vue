<template>
  <Page class="page" :class="[isDarkTheme ? 'ns-dark' : '']">
    <ActionBar :title="message">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
      <GridLayout columns="*, 50">
        <Label class="action-bar-title" text="Routines" colSpan="2" col="0" />
        <Label
          class="fas hamburger"
          text.decode="&#xf0c9;"
          col="2"
          @tap="onDrawerButtonTap"
        />
      </GridLayout>
    </ActionBar>

    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf015;" />
      <Label class="page__content-placeholder" :text="message" />
      <Label class="description" text="Work in progress" />
    </GridLayout>
    <FlexboxLayout flexDirection="column">
      <Label height="70">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>

      <TextView text="Work in progress" horizontalAlign="center" />
    </FlexboxLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";

import Workout from "./Workout";

export default {
  data() {
    return {
      Workout: Workout
    };
  },
  computed: {
    message() {
      return "Routines";
    }
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Search");
  },
  methods: {
    onDrawerButtonTap() {
      console.log("onDrawerButtonTap: showing drawer from Routines.vue!");
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
