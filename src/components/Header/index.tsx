import * as S from "./styles"
import Logo from "../../assets/🦆 icon _Plane 2_.svg"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Lista</a>
          </li>
        </ul>
        <input id="menu-toggle" type="checkbox" />
   
    
      </S.NavBar>
    </S.Header>
  )
}