## Learning Management System (Kambaz) — Next.js App Router

This is a Next.js application for a simple Learning Management System (LMS) UI used in labs. It includes a read-only Courses area and an Assignment Editor screen.

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm/bun)

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Key Screens / Navigation

- Courses → Assignments list: `/(Kambaz)/Courses/1234/Assignments`
- Assignment Editor: click any assignment title in the list, e.g. `/Courses/1234/Assignments/123`

The editor lives at `app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx`. It includes:

- Text inputs: `wd-name`, `wd-assign-to`
- Number/text: `wd-points`
- Selects: `wd-group`, `wd-display-grade-as`, `wd-submission-type`
- Checkboxes: `wd-text-entry`, `wd-website-url`, `wd-media-recordings`, `wd-student-annotation`, `wd-file-upload`
- Dates: `wd-due-date`, `wd-available-from`, `wd-available-until`
- Buttons: `wd-cancel`, `wd-save`

All labels are associated with inputs via `htmlFor` so clicking a label focuses/toggles its field.

### Project Structure

- `app/(Kambaz)/Courses/[cid]/Assignments/page.tsx` — assignments list with links
- `app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx` — assignment editor form
- `app/Labs` — lab navigation and samples

### Notes

This repo is oriented for UI exercises; there’s no backend. The Save/Cancel buttons are static placeholders.
