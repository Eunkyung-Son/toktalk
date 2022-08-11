# Folder Structure

    .
    ├── ...
    ├── styles
    │   ├── theme
    │   │   ├── index.ts                   # my main theme entrypoint
    │   │   ├── styles.ts                  # all my global style overrides
    │   │   ├── compoents
    │   │   │   ├── index.ts
    │   │   │   └── multi-parts
    │   │   │   └── single
    │   │   └── foundations
    │   │       ├── index.ts
    │   │       ├── config.ts
    │   │       ├── colors.ts
    │   │       ├── fontConfig.ts
    │   │       ├── fonts.ts
    │   │       ├── sizes.ts
    │   │
    │   └── fonts.tsx
    └── ...

# Theming

### Customize Theme

아래 레퍼런스 참고 부탁드립니다.

### Theme Typings

When adding new components, component variations, sizes, colors and other theme foundations, you can extend the internal theme typings to provide autocomplete for your application theme.

Install

```
yarn add --dev native-base
```

Usage

# Using Fonts

아래 레퍼런스 참고 부탁드립니다.

# Reference

- [Customize Theme](https://docs.nativebase.io/customizing-theme)
- [Theme Typings](https://docs.nativebase.io/typescript)
- [Using Fonts](https://docs.nativebase.io/customizing-fonts)
