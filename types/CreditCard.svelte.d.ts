/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface defaultProps {
  /**
   * @default "number"
   */
  focused?: string;

  /**
   * @default ""
   */
  cvc?: string;

  /**
   * @default ""
   */
  expiry?: string;

  /**
   * @default ""
   */
  issuer?: string;

  /**
   * @default ""
   */
  name?: string;

  /**
   * @default ""
   */
  number?: string;

  /**
   * @default { valid: "VALID THRU" }
   */
  locale?: { valid: "VALID THRU" };

  /**
   * @default { name: "YOUR NAME HERE" }
   */
  placeholders?: { name: "YOUR NAME HERE" };

  /**
   * @default false
   */
  preview?: boolean;
}

export default class extends SvelteComponentTyped<defaultProps, {}, {}> {}
