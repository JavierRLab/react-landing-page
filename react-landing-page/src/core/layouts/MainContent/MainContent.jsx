import React from "react";

import { VideoContainer } from "core/components/VideoContainer/VideoContainer";
import { SubscribeForm } from "core/layouts/MainContent/SubscribeForm/SubscribeForm";

export function MainContent(props) {
  return (
    <main id="main">
      <VideoContainer />
      <SubscribeForm />
    </main>
  )
}
