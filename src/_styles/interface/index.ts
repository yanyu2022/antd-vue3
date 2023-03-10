import type { ComponentTokenMap } from './components'
import type { AliasToken } from './alias'

export type OverrideToken = {
  [key in keyof ComponentTokenMap]: Partial<ComponentTokenMap[key]> & Partial<AliasToken>;
}
export type DerivativeFunc<A, B> = (a: A, b: B) => B

/** Final token which contains the components level override */
export type GlobalToken = AliasToken & ComponentTokenMap

export { PresetColors } from './preset-colors'
export type { PresetColorType, ColorPalettes } from './preset-colors'
export type { SeedToken } from './seeds'
export type {
  MapToken,
  ColorMapToken,
  ColorNeutralMapToken,
  CommonMapToken,
  HeightMapToken,
  SizeMapToken,
  FontMapToken,
  StyleMapToken,
} from './maps'
export type { AliasToken } from './alias'
export type { ComponentTokenMap } from './components'
