declare module 'keycrafter' {
  export type keyParams = {
    type?: "digit" | "string",
    length?: number
  }
  
  export function generateKey(params?: keyParams): string
}
