import { FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
// import { IoFastFoodOutline } from "react-icons/io5";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";
import { GiOpenedFoodCan } from "react-icons/gi";
import { MdOutlineNoFood } from "react-icons/md"
import { BiFoodTag } from "react-icons/bi";
import { BiSolidCategory } from "react-icons/bi";

import styled from "styled-components";
import {NavLink} from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={'/cuisine/Italian'} className="italian-button">
            <BiSolidCategory />
            <h4>Categories</h4>
            </SLink>

            <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
            </SLink>

            <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
            </SLink>

            <SLink to={'/cuisine/Milkshake'}>
            <GiChopsticks />
            <h4>Milkshake</h4>
            </SLink>

            <SLink to={'/cuisine/Icecream'}>
            <PiBowlFoodDuotone />
            <h4>Icecream</h4>
            </SLink>

            <SLink to={'/cuisine/Rice'}>
            <FaBowlFood />
            <h4>Rice</h4>
            </SLink>

            <SLink to={'/cuisine/Chappati'}>
            <GiOpenedFoodCan />
            <h4>Chappati</h4>
            </SLink>

            <SLink to={'/cuisine/Outline'}>
            <MdOutlineNoFood />
            <h4>OutlineFood</h4>
            </SLink>

            <SLink to={'/cuisine/Nonveg'}>
            <BiFoodTag />
            <h4>Nonveg</h4>
            </SLink>

        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    margin-bottom: -30px;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid #ED1CFA;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.italian-button{
        background: orange linear-gradient(orange, #ff8c00);
        svg{
            color: black;
        }
        h4{
            color: black;
        }
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }

    }
`; 

export default Category;