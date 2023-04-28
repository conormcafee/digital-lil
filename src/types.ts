export type WordmarkIcon = {
  url: string;
  height: number;
  width: number;
};

export type NavigationLink = {
  text: string;
  url: string;
  icon?: WordmarkIcon;
};

export type Service = {
  title: string;
  intro: string;
  icon: WordmarkIcon;
};
