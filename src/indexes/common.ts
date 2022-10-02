export type IndexableObj = Record<string, unknown>;

export type IndexOptions = {
  targetProperties: string[];
};

export type Captor<T> = (obj: T) => T;
