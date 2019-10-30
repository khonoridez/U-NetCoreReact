import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";

const panes = [
  { menuItem: "About", render: () => <TabPane>About Content</TabPane> },
  { menuItem: "Photos", render: () => <ProfilePhotos /> },
  {
    menuItem: "Activities",
    render: () => <TabPane>Activities Content</TabPane>
  },
  { menuItem: "Followers", render: () => <TabPane>Followers Content</TabPane> },
  { menuItem: "Following", render: () => <TabPane>Following Content</TabPane> }
];

const ProfileContent = () => {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
    />
  );
};

export default ProfileContent;
