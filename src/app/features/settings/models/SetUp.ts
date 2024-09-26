export enum Endpoints {
  settings,
}

export interface Title {
  label?: string;
  subLabel?: string;
}

export interface SubObjectOptions {
  label?: string;
  subLabel?: string;
  option?: string[];
  default?: string;
}
export interface ObjectOptions {
  label?: string;
  subLabel?: string;
  isHighlighted?: string;
  emails?: string[];
  [key: string]: SubObjectOptions | string | string[] | undefined;
}
export interface CombinedObject {
  [key: string]: { 
    [key: string]: ObjectOptions 
  };
}
