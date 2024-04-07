import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      <BiSolidFoodMenu />
        <Logo to={"/"}>Recipe Book</Logo>
      </Nav>
      <Search  />
      <Category />
      <Pages />  
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-item: center;

  margin-top: -40px;
  background: orange linear-gradient(orange, #ff8c00);
  height: 20px !important;
  width: 100%;
  margin-bottom: 15px;

  svg{
    font-size: 2rem;
  }

`

export default App;
