
import { useAuth } from "hooks";
import {Link} from './Navigation.staled';

export const Navigation = () => {
    const {isLoggedIn} = useAuth();


    return (
      <nav>
    <Link to="/">
      Home
    </Link>
    {isLoggedIn && (
      <Link to="/contacts">
        Contacts
      </Link>
    )}
  </nav>
  );
}