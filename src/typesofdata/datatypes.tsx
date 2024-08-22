interface Item {
  img: string;
  alt: string;
  title: string;
  price: string;
}

export interface ElectronicsCategory {
  category: string;
  prev: JSX.Element;
  next: JSX.Element;
  items: Item[];
}
