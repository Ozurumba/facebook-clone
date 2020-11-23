import FlexWrapper from "@fb-components/common/FlexWrapper";
import InstaStories from "@fb-components/globals/InstaStories";
import InputCommentStoryWithReactions from "./InputCommentStoryWithReactions";
import faker from "faker";

const userData = {
  avatar: faker.random.image(),
  fullName: faker.name.firstName(),
  userId: "",
};

const stories = [
  {
    image: faker.image.people(),
    text: "Hello from Peru 1 😂😂😂😂😂🙄",
    datetime: "1h",
  },
  {
    image: faker.image.food(),
    text: "Welcome back people :) 2 ❤💚💫",
    datetime: "2m",
  },
  {
    image: faker.image.business(),
    text: "My first post 3",
    datetime: "3m",
  },
  {
    image: faker.image.abstract(),
    text: "WELCOME BACK PEOPLE",
    datetime: "10h",
  },
];

const ContainerViewUserStory = () => {
  return (
    <FlexWrapper w="100%" css={{ background: "#111111" }} flexDirection="column">
      <InstaStories stories={stories} user={userData} />
      <InputCommentStoryWithReactions/>
    </FlexWrapper>
  );
};

export default ContainerViewUserStory;
