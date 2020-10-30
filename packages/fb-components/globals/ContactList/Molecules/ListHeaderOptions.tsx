import React from "react";
import FlexWrapper from "@fb-components/FlexWrapper";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";

type ListHeaderOptionsProps = {
  title?: string;
  children?: React.ReactNode;
};
const ListHeaderOptions = ({ title, children }: ListHeaderOptionsProps) => {
  return (
    <Wrapper p="20px 20px 0">
      <FlexWrapper justify="space-between" align="center">
        <TextLabel weight role="heading">{title}</TextLabel>
        <FlexWrapper>{children}</FlexWrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default ListHeaderOptions;