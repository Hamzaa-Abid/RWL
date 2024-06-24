import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route exact="true" path="/" changefreq="daily" priority=""></Route>
    <Route exact="true" path="/categories-view/:catid"></Route>
    <Route exact="true" path="/tag/:tagid"></Route>
    <Route exact="true" path="/breaking-news/:bnewsid"></Route>
    <Route exact="true" path="/breaking-news-view"></Route>
    <Route exact="true" path="/video-news-view/:vid"></Route>
    <Route exact="true" path="/bookmark"></Route>
    <Route exact="true" path="/news/:newsid/:catid"></Route>
    <Route exact="true" path="/view-all/:id"></Route>
    <Route exact="true" path="/categories"></Route>
    <Route exact="true" path="/live-news"></Route>
    <Route exact="true" path="/notification"></Route>
    <Route exact="true" path="/news-notification"></Route>
    <Route exact="true" path="/persnol-notification"></Route>
    <Route exact="true" path="/user-based-categories"></Route>
    <Route exact="true" path="/more-pages"></Route>
    <Route exact="true" path="/create-news"></Route>
    <Route exact="true" path="/manage-news"></Route>
    <Route exact="true" path="/edit-news"></Route>
    <Route exact="true" path="/profile-update"></Route>
  </Route>
);
