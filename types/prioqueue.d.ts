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

declare namespace queue {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly size: number;
    clear(): this;
    isEmpty(): boolean;
  }
}

declare namespace prioqueue {
  export interface Item<T = any> extends item.Instance<T> {}
  export interface Queue<T = any> extends queue.Instance<T> { }
}

declare const prioqueue: {
  Item: item.Constructor;
  Queue: queue.Constructor;
};

export = prioqueue;
