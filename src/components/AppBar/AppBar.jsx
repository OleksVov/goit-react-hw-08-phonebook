import { Navigation } from '../Navigation/Navigation'; 
import { AuthNav } from 'components/AuthNav/AuthNav';
import {UserMenu} from '../UserMenu/UserMenu';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';


export const AppBar = () => {
    const {isLoggedIn} = useAuth();
    return (
<header className={css.header}>
<Navigation/>
{isLoggedIn ? <UserMenu/> : <AuthNav/>}
</header>
    )
}