import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ItemThumbnailStyled = styled.div`
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.25);
    background-color: white;
    max-height: 500px;
`

const Heading = styled.h3`
    font-size: 1.2em;
    padding: 10px;
    font-weight: 900;
    text-align: center;
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const ImgStyled = styled(Img)`
    width: 100%;
    height: 350px;
    border-bottom: 1px solid rgb(0,0,0,0.2);
`

const Price = styled.p`
    justify-self: center;
    display: flex;
    font-weight: bold;
    font-size: 1.2em;
    color: #F51767;
    justify-content: space-around;
    width: 50%;
`

const USD = styled.p`
    color: black;
`

const AddButton = styled.button`
  padding: 20px;
  font-weight: 700;
  background-color: #F51767;
  color: white;
  text-transform: uppercase;
`

const itemThumbnail = (props) => {

    return (
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>
                <ImgStyled fluid={props.image} />
                <Heading>{props.heading}</Heading>
            </LinkStyled>
            <Price><USD>USD </USD>{props.price.toFixed(2)}</Price>
            <AddButton
            className='snipcart-add-item'
            // data-item-id={item.frontmatter.id}
            // data-item-price={item.frontmatter.price}
            // data-item-name={item.frontmatter.title}
            // data-item-url={"https://ztm-swag-store.netlify.com/" + item.fields.slug}
            >
            Add To Cart
          </AddButton>
        </ItemThumbnailStyled >
    )
}

export default itemThumbnail;

