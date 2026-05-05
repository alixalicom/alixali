import { client } from "./client";

export async function getWorkItems() {
  return client.fetch(
    `*[_type == "work"] | order(order asc, year desc) {
      _id,
      title,
      slug,
      category,
      image,
      description,
      year,
      featured
    }`
  );
}

export async function getAbout() {
  return client.fetch(
    `*[_type == "about"] | order(_createdAt asc)[0] {
      bio,
      bio2,
      yearsExperience,
      brandsCount,
      location,
      currentRole,
      currentCompany,
      currentPeriod,
      heroHeadline,
      heroSubtitle
    }`
  );
}
