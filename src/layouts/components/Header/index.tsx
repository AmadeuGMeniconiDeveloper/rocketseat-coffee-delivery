import { HeaderContainer, LocationBadge } from "./styled";

import logo from "../../../assets/logo.svg";
import { MapPin } from "@phosphor-icons/react";
import CartButton from "../../../components/CartButton";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <LocationBadge>
            <MapPin size={20} weight="fill" /> Location, State
          </LocationBadge>
          <CartButton />
        </nav>
      </div>
    </HeaderContainer>
  );
}
