import { z } from "zod";

// product types
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsTypes = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

// shipping form
export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().min(1, "Email is required!"),

  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digit!")
    .max(10, "Phone number must be between 7 and 10 digit")
    .regex(/^\d+$/, "Phone number must contain only number!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

// payment form
export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "cart holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card number is required!")
    .max(16, "Card number is required!"),

  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be MM/YY format"),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});

export type paymentFormInputs = z.infer<typeof paymentFormSchema>;

// cart store
export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
