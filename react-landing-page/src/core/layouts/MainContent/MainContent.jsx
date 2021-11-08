import React from "react";

import { VideoContainer } from "core/components/VideoContainer/VideoContainer";
import { SubscribeForm } from "core/layouts/MainContent/SubscribeForm/SubscribeForm";
import { Intro } from "core/layouts/MainContent/Intro/Intro";

export function MainContent(props) {
  return (
    <main id="main">
      <div id="main-row">
        <Intro />
        <VideoContainer />
      </div>
      <SubscribeForm />
    </main>
  )
}
