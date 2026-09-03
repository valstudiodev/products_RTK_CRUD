import { routes } from '@/app/routes/routes';
import '../model/_mainMenuStyles.scss';
import { NavLink } from 'react-router';
import { MainMenuProps } from '../model/mainMenuTypes';

function MainMenu({
  className = ''
}: MainMenuProps): React.JSX.Element {
  const classMainMenu = 'main-menu'

  const menuItems = routes[0].children.filter(
    (route) => route?.meta?.isInMenu
  ) ?? []

  return (
    <nav className={`${classMainMenu} ${className}`}>
      <ul className={`${classMainMenu}__list`}>
        {menuItems.map((route) => {
          const path = route.index ? '/' : route.path

          return (
            <li
              key={route.id}
              className={`${classMainMenu}__item`}
            >
              <NavLink
                to={path ?? ''}
                className={({ isActive }) => `${classMainMenu}__link ${isActive ? 'is-active' : ''}`}
              >
                {route?.meta?.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default MainMenu;