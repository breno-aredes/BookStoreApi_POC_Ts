export type BookEntity = {
  id: number;
  name: string;
  author: string;
  available: boolean;
};

export type NewBook = Partial<BookEntity>;
