# Astro blog - [nemanjamitic.com](https://nemanjamitic.com)

## Mirrors

- Nginx: https://nemanjamitic.com
- Github pages: https://nemanjam.github.io
- Docker: https://nmc-docker.arm1.nemanjamitic.com

## Features

The greatest care is devoted to a solid, clear, comprehensive, understandable, maintainable and customizable structure.

#### Astro

- Latest Astro, statically generated, high performance
- Post and Project content collections for `.mdx` content
- Support for both Tags (1:N) and Categories (1:1) relations
- Astro view transitions
- Astro optimized images
- Pagination for both blog and projects pages
- Environment variable controlled preview mode for draft posts and projects
- Embedded code syntax highlighting using `expressive-code`integration
- RSS and Json feed endpoints

#### Structure

- Extracted configuration for integrations and plugins to keep `astro.config.ts` clean and readable
- All website routes centralized into a single constant object
- All file system paths centralized into a single constant object
- All image sizes and breakpoints centralized into a single place as constants

#### Styling

- Both dark mode support, light/dark Tailwind modes and color themes support, semantic colors
- Themes stored into separate files as CSS variables organized in two levels
- Tailwind responsive styling, both spacings and typography
- Three layer (base/components/utilities) CSS code organization
- System for keeping typography styles in sync between markdown (prose) and custom components
- Component styles extracted into CSS files with `class-variance-authority` for variants

#### SEO and Metadata

- Centralized and typed metadata for all types of pages, with defaults
- Open graph image endpoint with Satori generated images for all pages with hero image and random gradient background
- Sitemap generated at build-time

#### External libraries

- Comments with Giscus and dark mode support

#### Types

- Fully Typescript, all types are located in a separate folder
- Centralized Zod schemas for Post, Project and Config models with proper defaults to prevent runtime exceptions
- Fully typed and build-time validated config and environment variables
- Enhanced Post collection model to include calculated reading time

#### Deployment

- Latest git commit info is included in the website footer for easy identifying of currently deployed version

## Roadmap

- Add accessibility attributes
- Add image gallery page
- Add remote markdown page
- Validate config with `astro:env`
- Render `.mdx` for RSS using component containers

## Credits

The most important projects, examples, demos, resources that I reused and reviewed:

- Starter project, initial structure, some components, some plugins, integrations, libs, styling choices - repo: [paularmstrong/paularmstrong.dev](https://github.com/paularmstrong/paularmstrong.dev), blog: https://paularmstrong.dev/blog
- Navbar responsive menu, theme toggling - repo: [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus), demo: https://astro-cactus.chriswilliams.dev/posts
- Astro collections schemas, some visual design decisions - repo: [billy-le/billyle.dev](https://github.com/billy-le/billyle.dev), blog: https://billyle.dev
- Giscuss comments, Satori og-image - repo: [thomasledoux1/website-thomas-astro](https://github.com/thomasledoux1/website-thomas-astro) , blog: https://website-thomas-astro.vercel.app/, repo: [TkDodo/blog](https://github.com/TkDodo/blog), blog: https://tkdodo.eu/blog
- Deployment with Docker and Nginx - docs: https://docs.astro.build/en/recipes/docker
- PostCard component design - site: https://flowbite.com/blocks, demo: https://mistral.bloggrify.com
- PostCardSmall component design - demo: https://epoxia.bloggrify.com/archives
- Design inspiration and reference - https://hashnode.com, https://medium.com, https://dev.to, https://www.developerway.com
- Tailwind themes, dark mode, CSS structure, semantic colors - site: https://daisyui.com, repo: https://github.com/saadeghi/daisyui

### Other credits

Other projects, examples, demos, resources that I reused and reviewed:

- Repo: [surjithctly/astroship](https://github.com/surjithctly/astroship), demo: https://astroship.web3templates.com
- Repo: [satnaing/astro-paper](https://github.com/satnaing/astro-paper), demo: https://astro-paper.pages.dev/posts
- Repo: [onwidget/astrowind](https://github.com/onwidget/astrowind), demo: https://astrowind.vercel.app
- Repo: [JustGoodUI/ovidius-astro-theme](https://github.com/JustGoodUI/ovidius-astro-theme), demo: https://ovidius-astro-theme.netlify.app
- [one-aalam/astro-ink](https://github.com/one-aalam/astro-ink)
- Repo: [treefarmstudio/odyssey-theme](https://github.com/treefarmstudio/odyssey-theme), demo: https://odyssey-theme.sapling.supply
- Official blog example project - repo: [withastro/astro/tree/main/examples/blog](https://github.com/withastro/astro/tree/main/examples/blog)
- Gatsby example - repo: [alxshelepenok/gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen), demo: https://lumen.alxshelepenok.com
- Shadcn Astro - repo: [mickasmt/astro-nomy](https://github.com/mickasmt/astro-nomy)
- Without Tailwind - repo: [rezahedi/rezahedi.dev](https://github.com/rezahedi/rezahedi.dev) , blog: https://rezahedi.dev
- Vue - demos: https://bloggrify.com/templates
- Keystatic CMS - repo: [simonswiss/simonswiss.com](https://github.com/simonswiss/simonswiss.com), blog: https://simonswiss.com
- Tailwind designs and gradients - site: https://tailwindui.com/templates
- Next.js - repo: [SSTPIERRE2/stephenstpierredotcom](https://github.com/SSTPIERRE2/stephenstpierredotcom)
  , blog: https://stephenstpierre.com/blog
