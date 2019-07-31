import React from 'react'
import styled from "styled-components" 
import { headerFontDesktop } from '../cssVariables';
const NavigationElements = styled.nav`

  .menu-nav{
    //displays on click
  display: flex;
  color: white;
  filter: blur(0px);
  justify-content: space-between;
  margin: 3.125em 6.25em;
  h2{
      font-size: 3.5rem;
      color: #000;
  }
  img {
    width: 40px;
    height: 35px;
    padding-bottom: 3.19em;
  }
  div {
      display: none;
    ul {
      li {
        text-align: right;
        padding-bottom: 1.72em;
      }
    }
  }
  }
  .alt-menu-nav{
      font-size: 1.8rem;
      margin-bottom: 4.875em;
      ul{
          justify-content: center;
          display: flex;
        
          li{
            margin: 0  3.125em;
          }
      }
  }

`
export default function Navigation() {
    return (
    <NavigationElements >
    <div className="menu-nav">
        <h2>DevFindr</h2>
        <img src={process.env.PUBLIC_URL + "/images/icon_Menu.svg"} />
        <div className="nav-section">
                <ul>
                <li>
                    Product Demo
                </li>
                <li>
                    Sign Up
                </li>
                <li>
                    Login
                </li>
                </ul>
            </div>
        </div>
        <nav className="alt-menu-nav">
            <ul>
                <li>Dashboard</li>
                <li>Find Projects</li>
                <li>Statements</li>
                <li>Notifications</li>
                <li>Settings</li>
            </ul>
        </nav>
          </NavigationElements>
    )
}