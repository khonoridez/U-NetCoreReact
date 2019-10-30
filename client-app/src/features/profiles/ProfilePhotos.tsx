import React, { useContext } from "react";
import { TabPane, Header, Card, Image } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";

const ProfilePhotos = () => {
  const rootStore = useContext(RootStoreContext);
  const { profile } = rootStore.profileStore;

  return (
    <TabPane>
      <Header icon="image" content="Photos" />
      <Card.Group itemsPerRow={5}>
        {profile &&
          profile.photos.map(photo => (
            <Card key={photo.id}>
              <Image src={photo.url} />
            </Card>
          ))}
      </Card.Group>
    </TabPane>
  );
};

export default ProfilePhotos;
