export type FormBodyProps = {
  actions: {
    toStart?: () => void;
    toEnd?: () => void;
  };
};

export type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: string;
};

export type HeaderProps = {
  animationTrigger?: boolean;
};

export type IntroSectionProps = {
  animationTrigger?: boolean;
};
