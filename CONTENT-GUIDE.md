# Website Content Editing Guide

All editable website content is stored in:

`src/content.ts`

The React page files control layout and styling only. For routine content updates, you should not need to edit them.

## Common Changes

### Branding And Contact Information

Edit the `SITE` object near the top of `src/content.ts`:

- `SITE.brand`: company, batch, branch and partner names
- `SITE.announcement`: top announcement bar
- `SITE.navigation`: menu labels
- `SITE.home`: home hero title, description and CTA labels
- `SITE.pageHeaders`: headings and descriptions for every sub-page
- `SITE.footer`: address, office and footer text

### Festival Film

Edit `FILM`:

- `src`: video URL
- `poster`: imported poster image
- `title`, `desc`, `duration`
- `scenes` and `pipeline`

### FeedbackBox Live QR Link

Edit `SITE.feedbackBoxLive.liveUrl`.

- Leave it empty to link the QR code to this portal's FeedbackBox page.
- Add a complete URL such as `https://feedbackbox.example.com` when the standalone project is deployed.
- QR heading, description and button labels are in the same object.

### Gallery Items

Edit these arrays:

- `PHOTO_WORKS`: before/after photo projects
- `SITES`: student website previews and links
- `POSTERS`: poster credits
- `COPY_CARDS`: marketing captions

### Student Creators

Edit:

- `YT_CREATORS`: YouTube creators
- `FB_CREATORS`: Facebook page creators

### Numbers And Ticker

Edit:

- `STATS`: home-page counters
- `TICKER`: scrolling festival announcements

## Images

Place new images in `src/assets/`, import them at the top of `src/content.ts`, and assign them to the relevant content item.

## Unified Object

The exported `CONTENT` object at the bottom of `src/content.ts` exposes all major data in one structure. It can later be connected to a CMS, JSON file or API without redesigning the website.

After editing content, verify the project with:

```bash
npm run build
```