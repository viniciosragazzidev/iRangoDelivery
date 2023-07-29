export interface SlideSimpleTypes {
  id: string;

  image: string;
  name: string;
  avaliation: string;

  category: string;
  distance: number;
  timeSend: [number, number]; // Fixing the timeSend property definition
  valueSend: number;
}

export interface CategoryType {
  id: string;
  title: string;
  description: string;
  companies: string;
  productCategory: string;

  [key: string]: any;
}
