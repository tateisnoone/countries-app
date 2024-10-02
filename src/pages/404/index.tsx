import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ fontSize: 36, color: "red" }}>
      404 <NavLink to="/"> Take me to home page </NavLink>
    </div>
  );
};
export default NotFoundPage;
