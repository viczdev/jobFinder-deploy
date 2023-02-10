import { useEffect, useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading, clearValues } =
    useAppContext();

  useEffect(() => {
    clearValues();
  }, []);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }

    updateUser({ name, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert></Alert>}

        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(event) => setName(event.target.value)}
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(event) => setLastName(event.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(event) => setEmail(event.target.value)}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(event) => setLocation(event.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
