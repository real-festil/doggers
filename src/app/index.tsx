import React from "react";
import "../i18n";

import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import withProviders from "./providers";

function App(): JSX.Element {
  const { t, ready } = useTranslation();

  if (!ready)
    return (
      <View>
        <Text>{t("common.notifications.loading")}</Text>
      </View>
    );
  return (
    <View>
      <Text>{t("sup")}</Text>
    </View>
  );
}

export default withProviders(App);
