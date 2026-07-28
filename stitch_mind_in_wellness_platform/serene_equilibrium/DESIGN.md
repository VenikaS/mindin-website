---
name: Serene Equilibrium
colors:
  surface: '#fbf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ed'
  surface-container: '#f0eee7'
  surface-container-high: '#eae8e1'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#42484a'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1ea'
  outline: '#72787b'
  outline-variant: '#c2c7ca'
  surface-tint: '#49626b'
  primary: '#49626b'
  on-primary: '#ffffff'
  primary-container: '#cfeaf5'
  on-primary-container: '#516a74'
  inverse-primary: '#b0cbd5'
  secondary: '#715858'
  on-secondary: '#ffffff'
  secondary-container: '#f9d8d7'
  on-secondary-container: '#755d5c'
  tertiary: '#535e7c'
  on-tertiary: '#ffffff'
  tertiary-container: '#dee5ff'
  on-tertiary-container: '#5b6685'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce7f2'
  primary-fixed-dim: '#b0cbd5'
  on-primary-fixed: '#031f27'
  on-primary-fixed-variant: '#314a53'
  secondary-fixed: '#fcdbda'
  secondary-fixed-dim: '#dfbfbe'
  on-secondary-fixed: '#281717'
  on-secondary-fixed-variant: '#584141'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#bbc6e9'
  on-tertiary-fixed: '#0f1b36'
  on-tertiary-fixed-variant: '#3b4663'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
  surface-pearl: '#FFFFFF'
  surface-cream: '#FFFDF6'
  surface-blue: '#CFEAF5'
  surface-peach: '#F8D7D6'
  accent-moss: '#6C7856'
  text-muted: '#46572A'
typography:
  display-lg:
    fontFamily: dmSans
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: dmSans
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: dmSans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: dmSans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in the concept of "Emotional Architecture"—creating a digital environment that feels as safe and breathable as a physical sanctuary. The brand personality is calm, warm, and professional, intentionally avoiding the cold, sterile aesthetics often associated with clinical healthcare.

The visual style is **Premium Minimalism** with **Organic Tactility**. We utilize generous whitespace to reduce cognitive load, paired with soft, fluid shapes that mimic natural forms. The interface focuses on "soft landings" for the eye, using subtle depth and rounded geometry to evoke a sense of protection and care. The target audience seeks clarity and emotional support, requiring an interface that feels both expertly curated and deeply human.

## Colors

This design system uses a palette of soft, restorative pastels balanced by high-contrast navy for rigorous legibility. 

- **Primary & Secondary:** Soft Blue and Light Peach serve as the primary emotional drivers. These should be used for large surface areas, organic background blobs, and subtle highlights.
- **High Contrast:** Dark Navy (#0C1833) is reserved almost exclusively for typography and critical calls to action, providing a professional anchor to the airy palette.
- **Surfaces:** We utilize a tiered background approach. The default page background is Cream (#FFFDF6). Pearl (#FFFFFF) is used for cards to create a subtle "lift."
- **Interaction States:** Use slightly deeper saturations of the primary blue for active states. Maintain a high contrast ratio for all text elements against pastel backgrounds.

## Typography

The typography strategy prioritizes "The Breathing Word." By combining the geometric friendliness of DM Sans for headlines with the utilitarian clarity of Inter for body copy, we achieve a balance of character and function.

- **Line Height:** Body text uses a generous 1.6x to 1.7x line height to prevent visual fatigue.
- **Hierarchy:** Use Dark Navy for all primary headings. Secondary text and metadata should use a muted moss-green (#46572A) to reduce visual noise while maintaining accessibility.
- **Scale:** On mobile devices, display type scales down aggressively to maintain a single-column focus without excessive wrapping.

## Layout & Spacing

This design system employs a **Fluid Grid** with an emphasis on vertical rhythm and "Content Sanctuaries"—large areas of padding that isolate key information.

- **Grid:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** Spacing follows an 8px base unit. Section spacing is intentionally oversized (120px+) to create a feeling of luxury and calm.
- **Reflow:** Components like the booking interface should transition from a multi-column "stepper" on desktop to a stacked, full-screen focused flow on mobile to minimize distractions.

## Elevation & Depth

Hierarchy is established through **Ambient Depth** and **Tonal Layering** rather than hard shadows.

- **Shadows:** Use extremely soft, large-radius shadows (Blur: 40px, Opacity: 4%) tinted with the primary blue hue to ground cards without creating "weight."
- **Layering:** Backgrounds should feature "Organic Blobs"—large, low-opacity SVG shapes in Peach and Blue—that sit behind content layers to break the rigidity of the grid.
- **Interactions:** Hover states utilize a subtle scale-up (1.02x) and a slight increase in shadow spread to provide tactile feedback that feels responsive but gentle.

## Shapes

The shape language is fundamentally **Soft and Organic**. 

- **Corners:** A base radius of 16px is applied to all cards, buttons, and input fields. Large containers or featured sections may use up to 32px or "Full Pill" shapes to emphasize the non-corporate nature of the brand.
- **Containers:** Avoid harsh 90-degree intersections. Where possible, use "squircle" geometry for a more premium, hand-finished feel.

## Components

### Buttons
Primary buttons are pill-shaped with the Dark Navy background and White text. Secondary buttons use the Light Blue background with Dark Navy text. All buttons feature a 200ms transition on hover for scale and shadow shifts.

### Cards
Cards are the primary container for content. They should have a White (Pearl) background, a 16px corner radius, and a soft ambient shadow. Avoid borders on cards; use the shadow and background color to define the boundary.

### Inputs & Forms
Inputs use a 16px corner radius with a soft 1px border in a muted blue. The focus state should transition the border to a thicker 2px stroke in the primary blue with a subtle glow (outer shadow). Error states use a soft coral red that aligns with the pastel palette.

### Accordions (FAQs)
Designed with a "Ghost" style—no outer border, using only a subtle horizontal divider. The expansion should be fluid (ease-in-out) to maintain the sense of calm.

### Multi-step Booking
The booking interface uses a progress bar with rounded ends. Each step is housed in a centered card to isolate the user's focus, using large "radio-card" selections for ease of use on touch devices.