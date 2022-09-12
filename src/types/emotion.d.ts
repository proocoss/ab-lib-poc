import "@emotion/react";
import { ITheme } from "../themes";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
