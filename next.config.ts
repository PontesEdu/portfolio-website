import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Existe um package-lock.json em um diretorio acima deste projeto. Sem fixar
  // a raiz, o Turbopack sobe demais ao inferir o workspace.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
