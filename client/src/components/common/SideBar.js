import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context';
import logo from '../../logo.png';
import { useLocation } from 'react-router-dom';
import CreateButton from '../create/CreateButton';
import CreateProduct from '../market/CreateProduct';

const Header = (props) => {

  const { user, setUser, cometChat } = useContext(Context);

  const history = useHistory();

  const location = useLocation();

  const logout = async () => {
    const isLogout = window.confirm('Você quer deslogar da conta?');
    if (isLogout) {
      await cometChat.logout();
      localStorage.removeItem('auth');
      setUser(null);
      history.push('/login');
    }
  };

  const goHome = () => {
    history.push('/');
  };

  const goProfile = () => {
    history.push(`/profile/${user.id}`)
  };

  const goNotification = () => {
    history.push('/notifications');
  };

  const goSearch = () => {
    history.push('/search');
  };

  const goMarket = () => {
    history.push('/market');
  };

  const goChat = () => {
    history.push('/chat');
  };

  return (
      <div className="sidebar">
          <div className='sidebarItens'>
          <span onClick={goHome}>
            { location.pathname === '/' ?
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M126-86v-531l354-266 354 265.667V-86H568v-322H392v322H126Z"/></svg></div>
              :
              <div><svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg></div>
            }
            <p>HOME</p>
          </span>
          <span onClick={goSearch}>
            { location.pathname === '/search' ?
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M782-82 523-341q-29 20-67.5 32T372-297q-118 0-200.5-82.5T89-580q0-118 82.5-200.5T372-863q118 0 200.5 82.5T655-580q0 46-12 83.5T611-431l260 261-89 88ZM372-423q66 0 111.5-45.5T529-580q0-66-45.5-111.5T372-737q-66 0-111.5 45.5T215-580q0 66 45.5 111.5T372-423Z"/></svg></div>
              :
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M781.692-136.924 530.461-388.155q-30 24.769-69 38.769t-80.692 14q-102.55 0-173.582-71.014t-71.032-173.537q0-102.524 71.014-173.601 71.014-71.076 173.538-71.076 102.523 0 173.6 71.032T625.384-580q0 42.846-14.385 81.846-14.385 39-38.385 67.846l251.231 251.231-42.153 42.153Zm-400.923-258.46q77.308 0 130.962-53.654Q565.385-502.692 565.385-580q0-77.308-53.654-130.962-53.654-53.654-130.962-53.654-77.308 0-130.962 53.654Q196.154-657.308 196.154-580q0 77.308 53.653 130.962 53.654 53.654 130.962 53.654Z"/></svg></div>
            }
            <p>PESQUISA</p>
          </span>
          <span onClick={goNotification}>
            { location.pathname === '/notifications' ?
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m479-74-81-73q-105-94-173.5-163t-108-124Q77-489 61-536t-16-98q0-109 72.5-182T299-889q51 0 97 18t83 53q37-35 83-53t97-18q109 0 182.5 73T915-634q0 50-15.5 97T844-435.5q-40 54.5-109 124T560-147l-81 73Z"/></svg></div>
              :
            <div><svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></div>
            }
            <p>NOTIFICAÇÕES</p>
          </span>
          <span onClick={goChat}>
            { location.pathname === '/chat' ?
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM60.782-60.782v-732.435q0-44.305 30.848-75.153 30.848-30.848 75.153-30.848h626.434q44.305 0 75.153 30.848 30.848 30.848 30.848 75.153v466.434q0 44.305-30.848 75.153-30.848 30.848-75.153 30.848H220.782l-160 160Z"/></svg></div>
              :
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M250.001-410.001h299.998v-59.998H250.001v59.998Zm0-120h459.998v-59.998H250.001v59.998Zm0-120h459.998v-59.998H250.001v59.998Zm-150 531.537v-669.227q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H241.539L100.001-118.464Zm116-201.536h571.69q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H172.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v523.076L216.001-320ZM160-320v-480V-320Z"/></svg></div>
            }
            <p>MENSAGENS</p>
          </span>
          <CreateButton/>
          &nbsp;
          <span onClick={goMarket}>
            { location.pathname === '/market' ?
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M206.783-60.782q-44.305 0-75.153-30.848-30.848-30.848-30.848-75.153V-628.13q0-44.305 30.848-75.153 30.848-30.848 75.153-30.848h64.738q0-86.392 60.761-147.435Q393.043-942.61 480-942.61t147.718 61.044q60.761 61.043 60.761 147.435h64.738q44.305 0 75.153 30.848 30.848 30.848 30.848 75.153v461.347q0 44.305-30.848 75.153-30.848 30.848-75.153 30.848H206.783ZM480-379.65q86.957 0 147.718-60.761 60.761-60.761 60.761-147.718H582.477q0 43.217-29.63 72.847-29.63 29.631-72.847 29.631t-72.847-29.631q-29.63-29.63-29.63-72.847H271.521q0 86.957 60.761 147.718Q393.043-379.651 480-379.651Zm-102.477-354.48h204.954q0-43.217-29.63-72.847-29.63-29.631-72.847-29.631t-72.847 29.631q-29.63 29.63-29.63 72.847Z"/></svg></div>
              :
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M212.309-100.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115v-455.382q0-29.923 21.193-51.115 21.192-21.193 51.115-21.193h87.692q0-74.922 52.538-127.46Q405.078-879.997 480-879.997t127.461 52.538q52.538 52.538 52.538 127.46h87.692q29.923 0 51.115 21.193 21.193 21.192 21.193 51.115v455.382q0 29.923-21.193 51.115-21.192 21.193-51.115 21.193H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v455.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM480-420.001q74.922 0 127.461-52.538Q659.999-525.078 659.999-600H600q0 50-35 85t-85 35q-50 0-85-35t-35-85h-59.999q0 74.922 52.538 127.461Q405.078-420.001 480-420.001ZM360-699.999h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160V-640-160Z"/></svg></div>
            }
            <p>MERCADO</p>
          </span>
          <CreateProduct/>
          </div>
          &nbsp;
          <div className='myProfile' onClick={goProfile}>
            <span className="header__user-avatar">
                <img src={`http://localhost:8080${user?.user_avatar}`} alt="user-avatar" />
                <p>{ user?.user_full_name }</p>  
            </span>
            <span onClick={logout}>
          <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M216.155-120q-30.307 0-51.307-21-21-21-21-51.307v-555.384q0-30.308 21-51.308t51.307-21h268.461V-760H216.155q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v555.384q0 4.616 3.847 8.462 3.846 3.846 8.462 3.846h268.461V-120H216.155Zm429.23-179.232-41.537-43.384L701.232-440H364.616v-59.999h336.616l-97.384-97.384 41.537-43.383 170.767 170.767-170.767 170.767Z"/></svg></div>
            <p>SAIR</p>
          </span>
            </div>
        </div>
  );
}

export default Header;