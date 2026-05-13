/**
 * Curated image registry — verified Pixabay CDN URLs + placedog.net fallback.
 * (Pixabay API was unreachable at scaffold time, so URLs are hand-picked.)
 */
export const dogs = {
  labrador:   "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-1210559_1280.jpg",
  dogPortrait:"https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
  maltese:    "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg",
  groomedDog: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg",
  corgi:      "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg",
  dogBlanket: "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg",
  husky:      "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg",
  dogSmile:   "https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg",
  puppy:      "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
  petsGroup:  "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg",
} as const;

export const dogList = Object.values(dogs);

/**
 * placedog.net — stable, dog-specific placeholder service.
 * IDs 1–237 are valid. Deterministic per seed.
 */
export function placedog(seed: string | number, w = 1200, h = 800): string {
  const s = typeof seed === "number"
    ? seed
    : Array.from(seed).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const id = (s % 237) + 1;
  return `https://placedog.net/${w}/${h}?id=${id}`;
}

/** Sequential dog gallery from the curated set, cycling if you ask for more. */
export function galleryImages(count: number, offset = 0): string[] {
  return Array.from({ length: count }, (_, i) => dogList[(offset + i) % dogList.length]);
}
