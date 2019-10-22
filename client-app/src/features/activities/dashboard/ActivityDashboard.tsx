import React, { SyntheticEvent, useContext } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/ActivityStore";

interface IProps {
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

const ActivityDashboard: React.FC<IProps> = ({
  deleteActivity,
  submitting,
  target
}) => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore;

  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList
          deleteActivity={deleteActivity}
          submitting={submitting}
          target={target}
        />
      </GridColumn>
      <GridColumn width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity!}
          />
        )}
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
