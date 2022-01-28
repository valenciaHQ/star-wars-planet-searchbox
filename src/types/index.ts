declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

export interface IData {
  name: string;
  code: string;
}

export interface IAutocomplete {
  data: IData[];
}
