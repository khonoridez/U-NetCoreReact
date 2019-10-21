import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>title</Card.Header>
        <Card.Meta>
          <span className="date">date</span>
        </Card.Meta>
        <Card.Description>description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group width={2}>
          <Button basic color="blue" content="Edit"></Button>
          <Button basic color="grey" content="Cancel"></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
