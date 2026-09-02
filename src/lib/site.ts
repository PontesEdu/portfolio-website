/**
 * URL publica do site.
 *
 * Fonte unica de verdade: metadata, canonical, Open Graph, sitemap, robots e
 * JSON-LD leem daqui. Nenhuma URL absoluta e escrita a mao no projeto, entao
 * apontar para um dominio proprio depois e so trocar a variavel de ambiente.
 *
 * A ordem de precedencia resolve o problema de ovo e galinha do primeiro
 * deploy, em que a URL so existe depois de o site subir:
 *
 *   1. NEXT_PUBLIC_SITE_URL -- definida a mao. Sempre vence, e e por onde entra
 *      o dominio proprio quando ele existir.
 *   2. VERCEL_PROJECT_PRODUCTION_URL -- a Vercel injeta sozinha, com o dominio
 *      de producao do projeto. Cobre o primeiro deploy sem configuracao.
 *   3. localhost, para desenvolvimento.
 *
 * O `||` e proposital no lugar de `??`: um campo deixado em branco no painel
 * vira string vazia, e `??` so cairia para a proxima opcao se fosse nulo.
 */
const daVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || daVercel || "http://localhost:3000";
