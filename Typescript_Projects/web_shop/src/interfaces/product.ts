export interface IProduct {
  product: {
    id: number;
    image: string;
    model: string;
    price: number;
  };
  createProduct(): void;
}

export interface IModal {
  add_button: HTMLButtonElement;
  x_button: HTMLDivElement;
  product: {
    id: number;
    model: string;
    price: number;
    images: string[];
    sizes: string[];
  };
  createModal(): void;
}

export interface ISelectedItem {
  product: { image: string; model: string; price: number; quantity: number };
  plus_btn: HTMLDivElement;
  minus_btn: HTMLDivElement;
  remove_btn: HTMLDivElement;
  container: HTMLDivElement;
  quantity_Div: HTMLDivElement;
  price_Div: HTMLDivElement;
  create_selected_item(): void;
}
