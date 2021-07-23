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
