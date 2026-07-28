---
name: Serene Nurture
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#42484a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
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
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  surface-sky: '#CFEAF5'
  surface-peach: '#F8D7D6'
  text-navy: '#0C1833'
  bg-pearl: '#FFFDF6'
  sage-accent: '#6C7856'
typography:
  headline-xl:
    fontFamily: DM Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  quote-display:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is centered on the concept of "Emotional Sanctuary." It aims to provide a digital environment that feels like a deep, calming breath—safe, professional, and full of quiet optimism. The brand personality is empathetic and grounded, intentionally moving away from the stark, sterile aesthetics of clinical therapy apps toward a more human and premium editorial experience.

The style is a blend of **Minimalism** and **Soft-Organic Design**. It utilizes expansive whitespace (breathing room), fluid organic "blob" backgrounds to represent the non-linear nature of healing, and a tactile softness achieved through gentle shadows and rounded geometry. The visual language conveys that "Mind'in" is a space where complexity is met with clarity and care.

## Colors

The palette is anchored by soft, atmospheric pastels that evoke the sky and warmth. 

- **Primary (Soft Pastel Blue):** Used for large background zones and primary action areas to instill a sense of calm and openness.
- **Secondary (Soft Peach):** Used for supportive elements, highlights, and "human" touches, providing a warm, hopeful contrast to the cool blue.
- **Tertiary (Dark Navy):** Reserved exclusively for typography and critical structural elements to ensure high legibility and a sense of professional authority.
- **Neutral (Pearl/Off-white):** A warm-toned white is used for the main background to avoid the harshness of pure digital white, maintaining the "premium" feel.

Color application should follow a 60-30-10 distribution to maintain a minimalist aesthetic, with the Navy used sparingly but with high intent.

## Typography

Typography in this design system balances modern approachability with structured clarity. 

**DM Sans** serves as the headline face. Its geometric yet friendly terminals feel contemporary and trustworthy. High-level headings use slight negative letter-spacing to feel more cohesive and "designed."

**Inter** is utilized for all functional and body text. It was chosen for its exceptional legibility and neutral character, which allows the therapeutic content to take center stage without visual distraction.

For testimonials or key philosophical statements, a **Quote Display** style is used to add an editorial, premium layer to the narrative.

## Layout & Spacing

The layout follows a **fixed-center grid** on desktop to maintain a feeling of contained, organized thought. On mobile, it transitions to a fluid single-column layout.

- **Generous Gaps:** Section vertical spacing is intentionally large (120px+) to ensure the user never feels overwhelmed by information density.
- **The "Safe Margin" Philosophy:** Content is never pushed to the edges of the screen. Large outer margins create a frame that makes the content feel protected.
- **Organic Flow:** Background blobs should be positioned "off-grid" to break the rigidity of the layout, creating a more natural, fluid movement as the user scrolls.

## Elevation & Depth

Depth in the design system is communicated through **Ambient Shadows** and **Tonal Layering**. 

Instead of traditional drop shadows, we use "Color Glows"—very soft, highly diffused shadows (30px-60px blur) that take a faint tint of the primary or secondary color. This makes elements appear as if they are floating gently rather than sitting on a heavy surface.

- **Level 1:** Flat surfaces with subtle 1px borders in a slightly darker neutral tone.
- **Level 2 (Cards):** Soft tinted shadows to denote interactivity.
- **Level 3 (Modals/Overlays):** Background blur (backdrop-filter: blur(12px)) to maintain context while focusing the user's attention.

## Shapes

The shape language is dominated by **Rounded** geometry (0.5rem base). Sharp corners are strictly avoided to maintain the "Safe & Friendly" brand pillar.

- **Primary UI Elements:** Buttons and input fields use a consistent 8px radius.
- **Feature Cards:** Use `rounded-lg` (16px) to emphasize their role as containers of care.
- **Background Elements:** Decorative "Blobs" use irregular, high-radius border curves (e.g., 30% 70% 70% 30% / 30% 30% 70% 70%) to mimic natural, organic forms.

## Components

- **Buttons:** Primary buttons are pill-shaped or highly rounded, using the Dark Navy background with white text for maximum contrast. Secondary buttons use the Soft Pastel Blue background with Navy text.
- **Cards:** Cards feature a soft-white background with a `rounded-lg` corner and a faint "Peach" or "Blue" ambient shadow. They should include generous internal padding (32px) to prevent content crowding.
- **Input Fields:** Minimalist design with a soft neutral background and a 1px border that shifts to Primary Blue on focus. Labels sit clearly above the field in `label-md`.
- **Chips:** Used for therapy specializations (e.g., "Anxiety," "Stress Management"). These should be low-contrast, using a light version of the primary or secondary colors with dark text.
- **Organic Blobs:** Large, animated or static SVG shapes in #CFEAF5 and #F8D7D6 placed behind content sections to provide visual softness and break the grid.
- **Lists:** Bullet points are replaced with custom soft-colored dots or small organic icons to maintain the friendly tone.