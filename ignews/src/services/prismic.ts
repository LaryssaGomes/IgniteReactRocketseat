import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT_API, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req: req,
  });

  return prismic;
}
