import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { styled } from "../../../../lib/stitches.config";
import { filterDetailInformationIdAtom, textFilterInformationAtom } from "../../../../stores/searchDetailInformation";
import BaseButtonAvatarAction from "../../../../ui/BaseButtonAvatarAction";
import BaseModal from "../../../../ui/BaseModal";
import PressableOverlay from "../../../../ui/PressableOverlay";
import TetraText from "../../../../ui/TetraText";


const InputEngineWrapper = styled("div", {
  backgroundColor: "$button",
  borderRadius: 10,
  flex: 1,
  marginRight: 20,
  padding: 15,
  display: "flex",
  alignItems: "center",
  "& input": {
    marginLeft: 10,
    width : "100%",
    color : "inherit"
  },
});


const PressableOverlayArticleItem = styled(PressableOverlay, {
  display: "flex",
  alignItems: "center",
});

const ListOfResultArticlesWrapper = styled("div",{
  maxHeight : "400px",
  overflowY : "auto",
  px : 10,
  my : 10,
  marginRight : 60
})


const OptionResultItem = ({ text } : {text: string}) => (
  <PressableOverlayArticleItem hoverable="true" spacing="medium" >
    <BaseButtonAvatarAction icon={FiSearch} />
    <TetraText css={{marginLeft:15}}>{text}</TetraText>
  </PressableOverlayArticleItem>
)


const HelpCenterButtonSearchTopics = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [ textFilter , setTextFilter ] = useAtom(textFilterInformationAtom);
  const filterDetailInformation = useAtomValue(filterDetailInformationIdAtom);
  const refSearchModal = useRef<HTMLDivElement>(null);


  const getOnlySixItems = [...filterDetailInformation].slice(0,6);
  const isEmptyResultItems = getOnlySixItems.length === 0;

  const handleOnKeyUpArticles = (event : React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setTextFilter(target.value);
  }

  useClickOutside(refSearchModal,() => {
    setOpen(false);
  })
 
  return (
    <div>
      <BaseButtonAvatarAction
        variant="secondary"
        icon={FiSearch}
        onClick={() => setOpen(true)}
      />
      {open && (
        <BaseModal size="medium" refModal={refSearchModal}>
          <BaseModal.Header onClose={() => setOpen(false)}>
            <InputEngineWrapper>
              <FiSearch size={20} />
              <input autoFocus placeholder="Search help articles..." onKeyUp={handleOnKeyUpArticles} />
            </InputEngineWrapper>
          </BaseModal.Header>
          <BaseModal.Body>
            <ListOfResultArticlesWrapper>
              {
                isEmptyResultItems 
                ? <OptionResultItem text={textFilter} />
                : getOnlySixItems.map(item => <OptionResultItem key={item.id} text={item.text} />)
              }
            </ListOfResultArticlesWrapper>
          </BaseModal.Body>
        </BaseModal>
      )}
    </div>
  );
};

export default HelpCenterButtonSearchTopics;