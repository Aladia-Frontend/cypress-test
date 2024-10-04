import { J as gql, aE as useUserProjectStatusStore, l as computed, a_ as useSubscription, aC as lodashExports } from "./index-DnMqUly2.js";
import { aP as Debug_RelevantRuns_SubscriptionDocument, aQ as Sidebar_RelevantRuns_SubscriptionDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-DT3RPtZJ.js";
gql`
  fragment UseRelevantRun on RelevantRun {
    all {
      runId
      runNumber
      sha
      status
    }
    latest {
      runId
      runNumber
      sha
      status
    }
    commitsAhead
    selectedRunNumber
    currentCommitInfo {
      sha
      message
    }
  }

  subscription Debug_RelevantRuns_Subscription($location: RelevantRunLocationEnum!) {
    relevantRuns(location: $location) {
      ...UseRelevantRun
    }
  }

  subscription Sidebar_RelevantRuns_Subscription($location: RelevantRunLocationEnum!) {
    relevantRuns(location: $location) {
      ...UseRelevantRun
    }
  }

`;
function useRelevantRun(location) {
  const userProjectStatusStore = useUserProjectStatusStore();
  const shouldPause = computed(() => {
    return !userProjectStatusStore.project.isProjectConnected;
  });
  let query = Debug_RelevantRuns_SubscriptionDocument;
  if (location === "SIDEBAR") {
    query = Sidebar_RelevantRuns_SubscriptionDocument;
  }
  const subscriptionResponse = useSubscription({ query, variables: { location }, pause: shouldPause });
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const allRuns = (_b = (_a = subscriptionResponse.data.value) == null ? void 0 : _a.relevantRuns) == null ? void 0 : _b.all;
    const selectedRunNumber = (_d = (_c = subscriptionResponse.data.value) == null ? void 0 : _c.relevantRuns) == null ? void 0 : _d.selectedRunNumber;
    const selectedRun = allRuns == null ? void 0 : allRuns.find((run) => run.runNumber === selectedRunNumber);
    const commitShas = lodashExports.uniq(allRuns == null ? void 0 : allRuns.map((run) => run.sha));
    return {
      all: (_f = (_e = subscriptionResponse.data.value) == null ? void 0 : _e.relevantRuns) == null ? void 0 : _f.all,
      latest: (_h = (_g = subscriptionResponse.data.value) == null ? void 0 : _g.relevantRuns) == null ? void 0 : _h.latest,
      commitsAhead: (_j = (_i = subscriptionResponse.data.value) == null ? void 0 : _i.relevantRuns) == null ? void 0 : _j.commitsAhead,
      selectedRun,
      commitShas,
      currentCommitInfo: (_l = (_k = subscriptionResponse.data.value) == null ? void 0 : _k.relevantRuns) == null ? void 0 : _l.currentCommitInfo
    };
  });
}
export {
  useRelevantRun as u
};
