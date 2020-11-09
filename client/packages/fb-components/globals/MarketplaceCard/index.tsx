import SquareImage from "@fb-components/SquareImage";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";

type MarketplaceCardProps = {
  image: string;
  price?: string;
  description?: string;
  location?: string;
};

const MarketplaceCard = (props: MarketplaceCardProps) => {
  return (
    <Wrapper w="300px">
     <SquareImage src={props.image}/>
      <Wrapper>
        <Wrapper p="5px 0">
          <TextLabel weight textColor="vgTextBlack">{props.price}</TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={400} textColor="vgTextBlack">{props.description}</TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={200}>{props.location}</TextLabel>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default MarketplaceCard;