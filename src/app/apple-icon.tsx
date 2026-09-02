import { ImageResponse } from "next/og";

import { Monograma } from "@/lib/icone";

/** Tamanho que o iOS usa ao salvar o site na tela inicial. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<Monograma lado={size.width} />, size);
}
