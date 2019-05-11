declare namespace item {
  export interface Constructor {
    new <T = any>(priority: number, value: T): Instance<T>;
  }

  export interface Instance<T> {
    value: T;
    readonly priority: number;
    toPair(): [number, T];
  }
}

declare namespace prioqueue {
  export interface Item<T = any> extends item.Instance<T> {}
}

declare const prioqueue: {
  Item: item.Constructor;
};

export = prioqueue;
