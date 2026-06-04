# Project Architecture

## 1. Project Overview

Loam IT Solutions is a marketing-style Next.js web application for an AI and software services company.

### What this project does
- Presents the company’s services, products, projects, blog content, careers, contact options, and support center.
- Includes an admin area for managing content such as products, projects, blog posts, careers, and contact submissions.
- Uses mostly static, in-repo content and client-side state to simulate a full business website.

### Main purpose and business context
- The site is positioned as a lead-generation and brand-presentation site for a technology consultancy.
- The public pages promote services in:
  - AI and machine learning
  - Web and mobile apps
  - AR/VR
  - Blockchain and Web3
  - Custom software
- The admin area is a demo content-management interface for internal operators.

### Important modules in the repository
- Public marketing site under `app/`
- Shared site shell in `app/layout.tsx` and `app/components/`
- Content sections for homepage, about, products, projects, blog, careers, contact, and support
- Admin panel under `app/admin/`

## 2. Architecture

### High-level architecture
This repository is a frontend-first Next.js App Router application. There is no real backend service, API layer, or database implementation in the repository.

Most data is hardcoded inside React components as arrays and objects. User interactions such as filtering, tab switching, form filling, and admin login are handled entirely in the browser.

### How the pieces fit together
- `app/layout.tsx` defines the shared shell for the public site:
  - Header
  - Main content area
  - Footer
  - Floating chat widget
- Route pages under `app/` render page-specific content components.
- Shared presentational components live in `app/components/`.
- The admin area uses its own layout and a client-side token stored in `localStorage`.

### Architecture diagram

```text
Browser
  |
  v
Next.js App Router
  |
  +--> Public site layout
  |      +--> Header
  |      +--> Page content
  |      +--> Footer
  |      +--> Floating chat widget
  |
  +--> Marketing pages
  |      +--> Home, About, Products, Projects, Blog, Careers, Contact, Support
  |
  +--> Blog detail route
  |      +--> /blog/[id]
  |      +--> Mock article content rendered from component state
  |
  +--> Admin area
         +--> /admin login
         +--> localStorage token check
         +--> AdminLayout shell
         +--> Mock CRUD management screens
```

### Frontend, backend, database, APIs, workers, services, integrations
- Frontend: Yes, all visible application logic is in React/Next.js components.
- Backend: Not present in the repository.
- Database: Not present in the repository.
- APIs: Not present in the repository.
- Workers/jobs: Not present in the repository.
- Services/integrations: Only presentation-level external links and remote assets are used.

## 3. Languages and Frameworks

| Category | Technology |
|---|---|
| Primary language | TypeScript |
| UI language | TSX / React |
| Styling | Tailwind CSS + custom CSS |
| Framework | Next.js |
| React version | React 18 |
| Icon library | lucide-react |
| Package manager | npm |
| Build tooling | Next.js build pipeline, PostCSS, Tailwind CSS, ESLint |

## 4. Runtime and Version Information

| Item | Version / Value |
|---|---|
| Node.js | Not specified in repository |
| Python | Not specified in repository |
| Java | Not specified in repository |
| Next.js | `^15.1.6` |
| React | `^18.3.1` |
| React DOM | `^18.3.1` |
| TypeScript | `^5.7.2` |
| Tailwind CSS | `^3.4.1` |
| PostCSS | `^8.4.35` |
| Autoprefixer | `^10.4.18` |
| ESLint | `^8.57.0` |
| `eslint-config-next` | `^15.1.6` |
| `lucide-react` | `^0.344.0` |
| npm lockfile format | `lockfileVersion: 3` |

### Version notes
- No `.nvmrc`, `.python-version`, Dockerfile, or other runtime version pin was found.
- No database version was specified because no database layer is defined in the repository.

## 5. Folder Structure

| Path | Responsibility |
|---|---|
| `app/` | Next.js App Router routes, layouts, and page-level UI |
| `app/components/` | Shared public-site components such as header, footer, hero, metrics, testimonials, and floating chat |
| `app/about/` | About page and supporting content component |
| `app/products/` | Products page and product listing content |
| `app/projects/` | Case studies / project portfolio page and content |
| `app/blog/` | Blog index page and blog content |
| `app/blog/[id]/` | Dynamic blog detail route and article rendering |
| `app/careers/` | Careers page and open roles UI |
| `app/contact/` | Contact page with multi-step request form |
| `app/support/` | Support center with tickets, FAQ, resources, and contact options |
| `app/admin/` | Admin login, admin layout, dashboard, and management pages |
| `public/` | Static assets such as favicon files |
| `tailwind.config.js` | Tailwind theme extension and animation definitions |
| `postcss.config.js` | PostCSS plugin configuration |
| `next.config.mjs` | Next.js configuration, including allowed remote image domains |
| `tsconfig.json` | TypeScript compiler settings and `@/*` path alias |
| `package.json` | Project scripts and dependency manifest |
| `package-lock.json` | npm lockfile |

### Notable repo-level artifacts
- `index.html` exists at the repository root, but it points to `/src/main.tsx` and does not match the Next.js App Router structure.
- `asdasd.json` exists at the repository root and appears to be a lockfile-style JSON artifact.
- Neither file appears to be part of the active Next.js route structure.

## 6. Application Flow

### How the application starts
- `app/layout.tsx` is the root layout for the public site.
- Public pages are defined as route segments under `app/`.
- The homepage (`app/page.tsx`) renders a sequence of section components:
  - Hero
  - Services
  - Why Choose Us
  - Metrics
  - Featured Case
  - Testimonials
  - Contact Strip

### Main entry points
- Public site root: `app/page.tsx`
- About: `app/about/page.tsx`
- Products: `app/products/page.tsx`
- Projects: `app/projects/page.tsx`
- Blog index: `app/blog/page.tsx`
- Blog detail: `app/blog/[id]/page.tsx`
- Careers: `app/careers/page.tsx`
- Contact: `app/contact/page.tsx`
- Support: `app/support/page.tsx`
- Admin login: `app/admin/page.tsx`
- Admin dashboard: `app/admin/dashboard/page.tsx`

### Public site flow
1. The user enters the site through the root layout.
2. The global header provides navigation across marketing pages.
3. The page body renders content modules for the selected route.
4. The footer and floating chat widget are always present on public pages.

### Blog flow
- The blog index page renders a featured post and a set of filtered blog cards.
- The dynamic route `/blog/[id]` passes the route parameter into `BlogDetailContent`.
- The blog detail component currently renders mock article content regardless of the ID value.

### Admin flow
1. The user opens `/admin`.
2. `AdminLogin` checks demo credentials in the browser.
3. On success, a token is stored in `localStorage` under `admin_token`.
4. The dashboard and management pages check that token client-side.
5. `AdminLayout` wraps the dashboard and management pages with sidebar navigation.

### Request/response and data flow
- There is no server-side request/response flow implemented for forms.
- Contact, support, careers, blog, and admin forms are UI-only in the current repository.
- Submissions are logged to the console or kept in component state rather than persisted.

### Authentication flow
- Authentication is demo-only and client-side.
- The admin login page uses hardcoded demo credentials.
- The token is stored in browser `localStorage`.
- There is no server validation, session store, or role system in the repository.

## 7. Configuration

### Environment variables
- No environment variables are defined in the repository.
- No `.env` example file was found.
- No `process.env` usage was found in the application code.

### Config files
- `next.config.mjs`
  - Enables experimental `appDir`
  - Allows remote images from `images.pexels.com` and `via.placeholder.com`
- `tailwind.config.js`
  - Extends color palette, fonts, animations, and keyframes
- `postcss.config.js`
  - Configures Tailwind CSS and Autoprefixer
- `tsconfig.json`
  - Strict TypeScript setup
  - Path alias `@/*`

### Secrets handling
- No secrets management system is present.
- No private credentials are stored as environment variables in the repository.
- The admin login demo uses hardcoded sample credentials for local UI flow only.

## 8. Database and Storage

### Database
- No database is implemented in the repository.
- No ORM, query layer, or migration system was found.
- No table or schema definitions were found.

### Data model approach
- Content is represented by in-memory arrays and objects inside components.
- Examples include:
  - blog posts
  - project case studies
  - products
  - careers/jobs
  - contact submissions
  - FAQs

### Storage
- Browser `localStorage` is used for the admin token.
- Static assets are served from `public/`.
- Remote images are loaded from Pexels and placeholder domains.

## 9. External Services and Integrations

### Confirmed external dependencies
- Pexels image URLs used throughout the public site and admin mock data.
- Google Fonts via `next/font/google` in the root layout.
- External email links via `mailto:`.
- External phone links via `tel:`.

### Non-functional or placeholder integrations
- Social links in the footer are placeholder `#` links.
- Support and resource download links include placeholder `#` targets.
- Several footer links point to routes that are not implemented in the repository:
  - `/privacy`
  - `/terms`
  - `/cookies`
  - `/security`
  - `/docs`

### No confirmed third-party service integrations
- No payment provider is wired up.
- No email delivery provider is wired up.
- No cloud hosting SDK is wired up.
- No authentication provider is wired up.
- No analytics backend is wired up.

## 10. Development Setup

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm run start
```

### Lint
```bash
npm run lint
```

### Required environment setup
- No special environment variables are documented in the repository.
- No database or external service setup is required for the current UI-only code path.

## 11. Deployment

### Deployment method
- No deployment configuration file was found in the repository.
- No CI/CD workflow files were found.
- No Docker files were found.

### Build and release process
- Standard Next.js build flow is available through `npm run build` and `npm run start`.
- The repository does not define automated release steps.

### Hosting hints
- `.gitignore` excludes `.vercel`, which suggests Vercel compatibility, but this is only an inference and not confirmed by a deployment config.

## 12. Testing

### Testing framework
- No testing framework is specified in the repository.

### Test structure
- No `test` script was found in `package.json`.
- No test folders or test files were found in the repository.

### Current verification approach
- Manual browser testing and linting appear to be the only visible validation paths.
- `npm run lint` is available, but no automated test coverage is defined.

## 13. Important Notes for Future Developers

### Conventions and patterns
- The project uses the App Router and organizes code by route segment.
- Page routes usually render a single content component.
- Shared public-site sections live in `app/components/`.
- Most components use local state and in-file data rather than props or external data sources.
- Tailwind utility classes are the primary styling mechanism.

### Important implementation patterns
- The public site uses a consistent header/footer shell.
- Many content blocks are data-driven through arrays mapped into cards, tabs, filters, and lists.
- Several components use browser-only APIs such as:
  - `window`
  - `localStorage`
  - `IntersectionObserver`
  - `navigator.clipboard`

### Areas that may need deeper review
- The admin auth flow is demo-only and not secure.
- Forms do not submit to a backend.
- Management screens are mock CRUD UIs without persistence.
- Some routes referenced in navigation do not exist in the repository.
- Several links use placeholders (`#`) and should be replaced before production use.
- Raw `<img>` tags are used heavily instead of `next/image`, even though remote image domains are configured.
- `app/layout.tsx` loads Inter through `next/font/google`, while `app/globals.css` also imports Inter from Google Fonts, which looks redundant.

### Assumptions used in this documentation
- This document treats the Next.js `app/` tree as the source of truth.
- `index.html` and `asdasd.json` were treated as legacy or stray artifacts because they do not match the active route structure.
- Because no backend, database, or environment configuration is present, those sections are documented as absent rather than inferred.

## Documentation Source Files Reviewed

- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `tailwind.config.js`
- `postcss.config.js`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `app/components/Header.tsx`
- `app/components/Footer.tsx`
- `app/components/Hero.tsx`
- `app/components/Services.tsx`
- `app/components/WhyChooseUs.tsx`
- `app/components/Metrics.tsx`
- `app/components/FeaturedCase.tsx`
- `app/components/Testimonials.tsx`
- `app/components/ContactStrip.tsx`
- `app/components/FloatingChat.tsx`
- `app/components/AnimatedLogo.tsx`
- `app/about/page.tsx`
- `app/about/AboutContent.tsx`
- `app/products/page.tsx`
- `app/products/ProductsContent.tsx`
- `app/projects/page.tsx`
- `app/projects/ProjectsContent.tsx`
- `app/blog/page.tsx`
- `app/blog/BlogContent.tsx`
- `app/blog/[id]/page.tsx`
- `app/blog/[id]/BlogDetailContent.tsx`
- `app/careers/page.tsx`
- `app/careers/CareersContent.tsx`
- `app/contact/page.tsx`
- `app/contact/ContactContent.tsx`
- `app/support/page.tsx`
- `app/support/SupportContent.tsx`
- `app/admin/layout.tsx`
- `app/admin/page.tsx`
- `app/admin/components/AdminLayout.tsx`
- `app/admin/components/AdminLogin.tsx`
- `app/admin/dashboard/page.tsx`
- `app/admin/dashboard/AdminDashboard.tsx`
- `app/admin/blog/page.tsx`
- `app/admin/blog/BlogManagement.tsx`
- `app/admin/projects/page.tsx`
- `app/admin/projects/ProjectsManagement.tsx`
- `app/admin/careers/page.tsx`
- `app/admin/careers/CareersManagement.tsx`
- `app/admin/contacts/page.tsx`
- `app/admin/contacts/ContactsManagement.tsx`
- `app/admin/products/page.tsx`
- `app/admin/products/ProductsManagement.tsx`
- `index.html`
- `asdasd.json`
- `.gitignore`
