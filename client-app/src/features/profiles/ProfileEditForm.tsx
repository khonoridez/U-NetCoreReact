import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button } from "semantic-ui-react";
import { combineValidators, isRequired } from "revalidate";
import { observer } from "mobx-react-lite";
import { IProfile } from "../../app/models/profile";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";

const validate = combineValidators({
  displayName: isRequired("displayName")
});

interface IProps {
  updateProfile: (profile: IProfile) => void;
  profile: IProfile;
}

const ProfileEditForm: React.FC<IProps> = ({ updateProfile, profile }) => {
  return (
    <FinalForm
      onSubmit={updateProfile}
      validate={validate}
      initialValues={profile!}
      render={({ handleSubmit, invalid, pristine, submitting }) => (
        <Form onSubmit={handleSubmit} error>
          <Field
            component={TextInput}
            name="displayName"
            placeholder="Display Name"
            value={profile!.displayName}
          />
          <Field
            component={TextAreaInput}
            name="bio"
            placeholder="Bio"
            rows={3}
            value={profile!.bio}
          />
          <Button
            content="Update profile"
            disabled={invalid || pristine}
            loading={submitting}
            floated="right"
            positive
          />
        </Form>
      )}
    />
  );
};

export default observer(ProfileEditForm);
