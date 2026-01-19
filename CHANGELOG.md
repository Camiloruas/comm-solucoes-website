# Changelog

All notable changes to the COMM SOLUÇÕES website will be documented in this file.

## [2.0.0] - 2026-01-18

### Added

- **Constants System**: Centralized data management
  - Created `constants/` directory with 7 modules (contact, services, testimonials, navigation, social, images)
  - Single source of truth for WhatsApp number (previously in 7 locations)
  - Easy configuration for contact info, services, and content

- **Test Infrastructure**: Comprehensive test suite with Vitest
  - Installed Vitest, React Testing Library, and jest-dom
  - Created 6 test files with 32 passing tests
  - Tests for Services, Testimonials, Navbar, BeforeAfterSlider, ErrorBoundary, and constants
  - Added test scripts: `npm test`, `npm run test:ui`, `npm run test:run`

- **Error Boundaries**: Graceful error handling
  - Created ErrorBoundary component with fallback UI
  - Prevents white screen on errors
  - Shows reload button and error details in development

- **Linting & Formatting**: Code quality tools
  - Configured ESLint with TypeScript, React, and React Hooks plugins
  - Configured Prettier with 100 print width and single quotes
  - Added lint, lint:fix, format, and type-check scripts
  - Added validate script combining all checks

- **Performance Optimizations**:
  - Added `useCallback` to BeforeAfterSlider.handleMove
  - Added `useMemo` to Navbar for class calculations
  - Added lazy loading to all images (Hero, Team, Before/After slider)

### Changed

- **Component Refactoring**: Updated 7 components to use constants
  - Services.tsx, Testimonials.tsx, Navbar.tsx, Footer.tsx
  - Hero.tsx, InstagramBanner.tsx, App.tsx
  - All now import from centralized constants

- **Configuration Cleanup**:
  - Removed unused GEMINI_API_KEY from vite.config.ts
  - Optimized Tailwind content paths (removed overly broad patterns)
  - Cleaner, more maintainable configuration files

- **Code Formatting**: All code formatted with Prettier for consistency

### Removed

- Hardcoded values scattered across components
- Unused environment variable configuration
- Broad Tailwind glob patterns

### Fixed

- Performance issues with re-renders in Navbar and BeforeAfterSlider
- Image loading blocking initial page load

---

## [1.0.0] - 2026-01-17

### Initial Release

- Dark mode functionality with theme context
- Responsive design for mobile and desktop
- Service cards with icons
- Before/After image slider
- Testimonials section with Google rating
- Instagram banner integration
- Contact information and WhatsApp integration

---

## Version Guidelines

- **Major version (X.0.0)**: Breaking changes or major feature additions
- **Minor version (0.X.0)**: New features, backward compatible
- **Patch version (0.0.X)**: Bug fixes, backward compatible

---

_All changes are co-authored by the development team and Claude Sonnet 4.5._
