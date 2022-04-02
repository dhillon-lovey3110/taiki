import { createContext, ReactNode, useContext, useState } from "react";

type ModalContextType = {
  open: boolean;
  setModalToggle: (value: boolean) => void;
};

const init = {
  open: false,
  setModalToggle: () => false,
};

export const ModalContext = createContext<ModalContextType>(init);

export const ModalContextProvider = (props: { children: ReactNode }) => {
  const [open, setModalToggle] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ open, setModalToggle }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
