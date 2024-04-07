 import styled from 'styled-components';
 import { useState } from 'react';
 import { FaSearch } from 'react-icons/fa';
 import {useNavigate} from 'react-router-dom';

 function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return(
        <FormStyle onSubmit={submitHandler}>
            <div>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='search you recipe' value={input} />
            </div>
        </FormStyle>
    )
 }

 const FormStyle = styled.form`
 margin: 0;
 position: relative;
 
 div {
   position: relative;
 }
 
 input {
   border: 2px solid black;
   background-color: 
  //  background: linear-gradient(35deg, #494949, #313131);
   font-size: 1.5rem;
   color: Black;
   padding: 1rem 3rem;
   border: 2px solid #ffff00;
   border-radius: 1rem;
   outline: none;
   width: calc(100% - 2rem); /* Adjusted width */
   margin: 0 1rem; /* Added margin to align with the margin of the form */
 }
 
 svg {
   position: absolute;
   top: 50%;
   left: 2%;
   transform: translate(100%, -50%);
   color: Black;
 }
`;

 export default Search;