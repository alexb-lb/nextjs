import React from "react";
import LandingPage from "./main";
import { fetchNavigation } from "og_strapi_client";


async function TermsPage() {
  const navigation = await fetchNavigation(["header", "footer"]);
  return <LandingPage navigation={navigation} />;
}
export const dynamic = "force-dynamic";
export default TermsPage;
