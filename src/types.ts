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

export type ServiceFeature = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: WordmarkIcon;
  body: string;
  features: ServiceFeature[];
};
