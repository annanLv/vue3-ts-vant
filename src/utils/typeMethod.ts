export type PartialByKeys<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Pick<T, Exclude<keyof T, K>>

export type Simplify<T> = {
  [P in keyof T]: T[P]
}
