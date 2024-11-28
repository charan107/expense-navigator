import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout, rupee } from '../../utils/Icons';  // Ensure dollar icon is imported
import { menuItems } from '../../utils/menuItems';
import { useGlobalContext } from '../../context/globalContext';  // Make sure this is imported correctly

function Navigation({ active, setActive, handleSignOut, user }) {
  const { totalBalance } = useGlobalContext();  // Assuming totalBalance is a function from context

  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="avatar" />
        <div className="text">
          <h2>{user ? user.username : '-'}</h2>
          <p>{rupee} {totalBalance()}</p> {/* Display total balance from context */}
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <li>
          <button onClick={handleSignOut} className="signout-btn">
            {signout} Sign Out
          </button>
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #FFFFFF;
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    h2 {
      color: rgba(34, 34, 96, 1);
    }

    p {
      color: rgba(34, 34, 96, .6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all .4s ease-in-out;
      color: rgba(34, 34, 96, .6);
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    .signout-btn {
      background: none;
      border: none;
      color: rgba(34, 34, 96, 1);
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s ease;

      i {
        color: rgba(34, 34, 96, 1);
      }

      &:hover {
        color: rgba(34, 34, 96, 0.8);
      }
    }
  }
`;

export default Navigation;
