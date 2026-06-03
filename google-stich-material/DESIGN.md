---
name: Aegis Noir
colors:
  surface: '#16130f'
  surface-dim: '#16130f'
  surface-bright: '#3c3934'
  surface-container-lowest: '#100e0a'
  surface-container-low: '#1e1b17'
  surface-container: '#221f1b'
  surface-container-high: '#2d2925'
  surface-container-highest: '#38342f'
  on-surface: '#e9e1da'
  on-surface-variant: '#d0c5b5'
  inverse-surface: '#e9e1da'
  inverse-on-surface: '#33302b'
  outline: '#998f81'
  outline-variant: '#4d463a'
  surface-tint: '#e3c285'
  primary: '#e5c487'
  on-primary: '#402d00'
  primary-container: '#c8a96e'
  on-primary-container: '#533d0c'
  inverse-primary: '#735b28'
  secondary: '#c7c6c5'
  on-secondary: '#303030'
  secondary-container: '#464746'
  on-secondary-container: '#b6b5b4'
  tertiary: '#aec9ff'
  on-tertiary: '#0c2f60'
  tertiary-container: '#91ade5'
  on-tertiary-container: '#214071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea3'
  primary-fixed-dim: '#e3c285'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#594312'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1b1c1b'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#284678'
  background: '#16130f'
  on-background: '#e9e1da'
  surface-variant: '#38342f'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  body-large:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  body-main:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for high-stakes operational environments, drawing from cinematic noir and technical defense interfaces. The aesthetic is a **Minimalist-Brutalist** hybrid. While it retains its rigid, machine-like foundation, it incorporates subtle industrial softening to improve interface scanning. Every element must appear as a functional component of a larger machine, evoking a sense of gravity, precision, and operational readiness.

The system rejects modern trends of organic fluidity in favor of structured geometry and low-chroma high-density information display. The interface does not "float"; it is constructed from layered, load-bearing surfaces that suggest a physical, armored hardware origin. Surfaces are flat and interaction feedback is immediate and mechanical.

## Colors

The palette is a disciplined dark range punctuated by specific functional accents.

The primary accent, **Gold #c8a96e**, is the exclusive color for critical data points, active states, or primary calls to action. To support more complex data states and analytical overlays, **Tertiary Deep Blue #1a3a6b** is utilized for informational depth, secondary systems, or stable background processes, providing a cool visual counterpoint to the warmth of the primary gold.

Labels and inactive states utilize the **Secondary Grey #6b6b6a** to recede into the background. Structural elements and surface derivations ensure the user's focus remains on high-priority metrics. Surface layering provides the necessary tonal separation for information hierarchy without breaking the dark-dominant noir atmosphere.

## Typography

Typography is treated as a data-delivery mechanism. Headings are set in Inter 600 with tight tracking to create a sense of density and importance. The body text prioritizes legibility in low-light environments, utilizing a generous 1.7 line height to prevent ocular fatigue during extended operational use.

Labels are exclusively uppercase with 0.1em tracking, rendered in the secondary neutral tone #6b6b6a. This creates a clear visual distinction between metadata (labels) and primary data (values). No italics or decorative weights are permitted.

## Layout & Spacing

This design system employs a strict 12-column fixed grid for primary dashboard views and a 4px baseline rhythm for internal component spacing. The layout is modular and compartmentalized, using the 0.5px border as the primary method of separation.

Negative space is used to define clear boundaries between distinct operational zones. Alignment is always hard-edged; every module must align precisely to the grid to maintain the technical, load-bearing integrity of the interface.

## Elevation & Depth

Depth is achieved through tonal layering and hard-edged outlines rather than shadows or blurs. This system rejects ambient shadows entirely.

Levels of elevation are defined as follows:

1. Base: The deepest foundation layer.
2. Surface: The primary workspace containers.
3. Elevated: Active panels, modals, or tooltips.

All interactive or distinct containers must be bounded by a 0.5px solid border. When an element is focused or active, the border may transition to the Gold accent or Tertiary Deep Blue, but the thickness remains constant.

## Shapes

The shape language reflects precision-milled engineering. A roundedness value of 1 (4px radius) is applied to all elements including buttons, inputs, cards, and containers. These subtle radiuses soften the "brutal" nature of the system just enough to improve ergonomics while maintaining the "hard" defense-system aesthetic. Organic curves are prohibited; the radii must remain consistent and restrained.

## Components

Buttons: Rectangular with a 4px border-radius. Primary buttons use a Gold #c8a96e background with dark text. Tertiary buttons use the Deep Blue #1a3a6b background for auxiliary or informational states. Secondary buttons use a transparent background with the standard 0.5px border and white text.

Inputs: Backgrounds must be Surface-tier colors. Labels must sit above the field in the Label-Caps style. The active state is indicated only by a change in border opacity or a 1px Gold underline.

Cards/Panels: Containers for data modules. Must use the Elevated background, a 4px corner radius, and a 0.5px border. Headers within cards should be separated by a 0.5px horizontal line.

Status Indicators: Small rounded squares. Use Gold for "Active/Alert," Tertiary Deep Blue for "Processing/System," and the secondary color #6b6b6a for "Standby/Inactive."

Data Tables: No alternating row colors. Rows are separated by 0.5px lines. Column headers use Label-Caps typography. Values use the body-main or mono-data style for precision.

Selection Controls: Checkboxes and radio buttons are squares with a 4px corner radius. Filling an active state uses the Gold accent color.
