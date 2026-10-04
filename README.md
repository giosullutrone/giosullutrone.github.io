# Giovanni Sullutrone — personal research page

A static portfolio for GitHub Pages, shaped around Giovanni’s own voice and research questions. The selected Soft color design uses lighter Geist typography, rounded cards, and coordinated pastel diagrams. The design combines the broad typography and editorial spacing of [Dennis Snellenberg](https://dennissnellenberg.com/) with the colorful graphic panels and precise interactions of [Rauno Freiberg](https://rauno.me/). The portrait, candid introduction, and three research previews lead into the papers. It includes 12 verified public publication records, a biography, education and affiliations, research methods, and contact links. The four papers selected in the GitHub profile README are pinned first, in its order: COVER, Text-to-Refused-SQL, Sensitive Topics Retrieval, and ABISS. Each has a visible Pinned badge. The remaining papers keep their chronological order. Related conference and journal records remain separate and are labelled accordingly.

GitHub Pages is configured to publish this site from the main branch at the repository root.

## Deploy to GitHub Pages

1. Unzip the package. Copy the **contents** of `giosullutrone.github.io/` into the root of your existing [giosullutrone/giosullutrone.github.io](https://github.com/giosullutrone/giosullutrone.github.io) repository. The root should contain `index.html`, `styles.css`, `theme.css`, `script.js`, `.nojekyll`, and `assets/`, rather than another enclosing folder. Include the hidden `.nojekyll` file when copying.
2. Commit the files to `main`. The existing `_config.yml` can stay; `.nojekyll` makes this a plain static site.
3. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**, and save.
4. Wait for GitHub's Pages deployment to finish. The public address will be **https://giosullutrone.github.io/**.

This repository has GitHub Pages enabled and serves the website at [giosullutrone.github.io](https://giosullutrone.github.io/). The source is `main` / `/(root)`.

## Preview and edit

Open `index.html` directly in a browser, or serve this directory with a local static web server. There is no build step, package installation, or external font service. A small optional script adds one-time entry animations and highlights the current navigation section. All papers, links, and author disclosures work without JavaScript. Reduced-motion preferences remove optional movement and smooth scrolling.

- `index.html` contains the biography, all publications, and their links. Each publication is an `<article>` with a stable ID. The full coauthor list is available through its native Authors disclosure.
- `styles.css` supplies the shared layout, responsive behavior, hover/focus states, and reduced-motion rules. `theme.css` overrides the colors, type, shapes, and spacing for the selected Soft color style.
- `script.js` supplies the optional motion and navigation enhancement, without dependencies, data collection, or remote requests.
- `assets/portrait.jpg` is Giovanni's public GitHub portrait. Replace it to change the photo.
- `assets/diagrams/` contains twelve explanatory SVG figures, one for each paper. They use short labels and distinct color palettes to explain the central question, workflow, or limitation. These are newly composed schematics, rather than reproduced experimental figures or measured results. Each file includes an accessible title and description; the page supplies corresponding alternative text.
- Proposed stages are explicitly marked, OCR correction retains unresolved errors, and refusal and retrieval examples preserve uncertainty. Diagram interpretations follow the primary records linked on the corresponding cards.
- `assets/illustrations/` and `assets/coastal-meadow.jpg` preserve the earlier artwork, which is no longer displayed. [The original image provenance and exact prompts](assets/illustrations/GENERATED-ILLUSTRATIONS.md) remain available.

The opening’s personal line comes from Giovanni’s self-authored GitHub profile. The About introduction draws on his public CV’s account of papers beginning with discussions or strong agreement or disagreement with the literature.

The profile and public publication list were checked on **3 October 2026**. Unpublished or unindexed work may be missing. The PhD completion date is explicitly marked as expected and should be updated after completion. DM-LP's conference and bibliographic dates differ; the page preserves that distinction. Its dataset is available by research request, so the link leads to code and access details.

## Content sources

Profile: [Giovanni's self-authored GitHub profile](https://github.com/giosullutrone/giosullutrone), [public CV dated 7 August 2026](https://github.com/giosullutrone/giosullutrone/blob/main/Giovanni%20Sullutrone%20-%20CV%20-%2007-08-26.pdf), [UNIMORE PhD directory](https://www.ict.unimore.it/phdStudents.asp?cycle=39), [DBGroup](https://dbgroup.unimore.it/site/home/people/articolo1250035038.html), and [DARE Lab profile](https://darelab.athenarc.gr/people/giosullutrone/). The dated DARE visit uses the university directory. Degree institutions, dates, grades, the A.I. Tech research grant, ITSERR, and the Google Scholar link use the public CV. The portfolio shows the professional email as its contact address.

Publication titles, authors, venues, and summaries use the primary paper or institutional records linked on each card: arXiv, ACL Anthology, CEUR proceedings, Springer, ACM, Umanistica Digitale, the DATA conference, and University of Palermo IRIS. The JCDL second-place recognition uses [UNIMORE's award announcement](https://www.ict.unimore.it/news.asp?idNews=209). The DATA card links to the official abstract because a public full-text link was not confirmed.

## Assets and licenses

The SVG diagrams were composed specifically for this portfolio and contain no third-party images, external resources, or scripts. The self-hosted Fraunces and Geist fonts are distributed under the SIL Open Font License; the respective license files are included in `assets/`. The public GitHub portrait belongs to Giovanni. The source image was retrieved from `https://avatars.githubusercontent.com/u/50496491?v=4` and converted to JPEG for delivery.

The landscape was created once using the built-in imagegen tool and saved as `assets/coastal-meadow.jpg`. The exact generation prompt was:

```text
Use case: photorealistic-natural
Asset type: original decorative landscape banner for Giovanni Sullutrone's academic LLM portfolio; full-width rounded masthead with live HTML heading placed over the image.
Primary request: a vivid but calm imagined Mediterranean coastal meadow, blue sea reaching a distant horizon, elegant wild irises and small yellow and purple flowers along the lower foreground, gently rolling rocky green coast, luminous soft cumulus clouds.
Style/medium: richly detailed painterly photographic editorial landscape, premium and natural, with graceful botanical detail and realistic atmospheric depth.
Composition/framing: very wide panoramic composition, approximately 3:1 aspect ratio; target 1800 pixels or greater in width. Keep flowers and coast principally in the lower foreground. Leave the center and upper half uncluttered with open azure sky and calm sea, without prominent objects, so a live heading has ample room. Continuous natural landscape filling the canvas, no frame or rounded corners baked into the image.
Lighting/mood: luminous soft daylight, serene and inviting.
Color palette: azure and periwinkle sky, ultramarine sea, verdant greens, lilac and soft-yellow flowers.
Constraints: a brand-new original image, opaque background. This is decorative art and should not depict or imply a specific real geographic place.
Avoid: people, buildings, logos, letters, typography, watermark, UI, paper objects, artificial network motifs.
```
