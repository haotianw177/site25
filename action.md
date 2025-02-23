1. linkedin icon size, line up bottom, night mode linkedin icon

2. br space between project and chrnology

3. add hacker: [Hackers in the Bazzar](https://www3.nd.edu/~pbui/teaching/cse.40842.fa24/) is a Computer Science and Engineering elective course at the University of Notre Dame that explores the idea of a "hacker" and the practice of participating in the open source "bazaar". 

For this class, I developed a C++ Space Invader clone, a Go-based budget sharing app, contributed to open source projects. I also completed weekly readings and developed a [blog website](https://haotianw177.github.io/blogs/) for reflections focus on hacker history and open source culture.

4. mdx file with javascripit injected :This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.

## Why MDX?

MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.

If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.

## Example

Here is how you import and use a UI component inside of MDX.  
When you open this page in the browser, you should see the clickable button below.

import HeaderLink from '@src/layouts/components/HeaderLink.astro';

<HeaderLink href="#" onclick="alert('clicked!')">
	Embedded component in MDX
</HeaderLink>

## More Links

- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)
- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)
- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.
