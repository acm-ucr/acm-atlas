# ACM Atlas Website

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23407ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
<br/>
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## Figma

[ACM Atlas Website Figma Design File](<https://www.figma.com/design/qQLesadGHl9xa1FnximmJ8/acm-website-(-new-!-)?node-id=0-1&p=f&t=Jde62jHJgiEP6P6R-0>)

## Node.js

ACM Atlas Website runs on Node.js Version 20.10.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Next.js

This project is built using [Next.js](https://nextjs.org), a React framework. Next.js is automatically installed when you install all dependencies for this project.

## Environment Variables

The following environment variables are required and must be stored in an `.env` file:

```env
NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY=
NEXT_PUBLIC_GOOGLE_CALENDAR_EVENTS=
NEXT_PUBLIC_GOOGLE_CALENDAR_SPARK=
NEXT_PUBLIC_GOOGLE_CALENDAR_FORGE=
NEXT_PUBLIC_GOOGLE_CALENDAR_CREATE=
NEXT_PUBLIC_GOOGLE_CALENDAR_DAS=
NEXT_PUBLIC_GOOGLE_CALENDAR_BITBYTE=
NEXT_PUBLIC_INSTAGRAM_BEHOLD_ID=
```

## Commands

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Website Locally

```bash
# Open a browser at localhost:3000
npm run dev
```

### Formatting Code via Prettier

```bash
# Rewrite code recursively with proper formatting
npm run format

# Show formatting differences recursively
npm run check
```

### Linting Code via Eslint

```bash
npm run eslint
```

### Build the Website

```bash
npm run build
```
