import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const [error, setError] = useState(null);
    const { type } = useParams(); // Extract 'type' parameter from URL

    useEffect(() => {
        getCuisine(type); // Pass 'type' parameter to getCuisine function
    }, [type]);

    const getCuisine = async (name) => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

            if (!data.ok) {
                throw new Error('Failed to fetch data');
            }

            const recipes = await data.json();
            console.log("Fetched Recipes:", recipes);
            setCuisine(recipes.results);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => (
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
        margin-top: 70px;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;
