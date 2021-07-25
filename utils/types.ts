interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticRequire {
  default: StaticImageData;
}

export type StaticImport = StaticRequire | StaticImageData;

export type NonEmptyArray<T> = [T, ...T[]];

export type WithClassName<Overridable = false> = Overridable extends false
  ? {
      /**
       * A className to add to an element.
       */
      className?: string;
    }
  : {
      /**
       * A className to add to an element.
       */
      className?: string;
      /**
       * If `true`, then the className property you provide will completely replace any existing className.
       */
      overrideClassName?: boolean;
    };
