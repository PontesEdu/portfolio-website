/**
 * URL publica do site.
 *
 * Fonte unica: trocar de *.vercel.app para dominio proprio e so alterar a
 * variavel de ambiente. Nenhuma URL absoluta e escrita a mao em metadata,
 * Open Graph ou JSON-LD.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
