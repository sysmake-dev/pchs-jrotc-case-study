# Design Decisions

---

## About

This document records the design decisions made throughout the development of the Palmetto Coast High Leadership Academy website, along with the reasoning behind each choice. Its purpose is to document the rationale behind implementation decisions and provide a reference for future maintenance, redesigns, or feature additions.

---

# Color Decisions

## Primary Color

**Decision:** Use Deep Navy (`#1F3A5F`) as the primary brand color.

**Reasoning:**

Deep navy communicates leadership, professionalism, discipline, and trust. Because the website represents a high school's Leadership Academy and JROTC program, the primary color should reinforce structure, responsibility, and credibility while remaining approachable to students, parents, instructors, and community members.

---

## Secondary Color

**Decision:** Use Muted Gold (`#D4AF37`) as the secondary color.

**Reasoning:**

Gold symbolizes achievement, honor, excellence, and recognition. It evokes military insignia, awards, and academic accomplishment, reinforcing the leadership-focused nature of the program. To preserve its visual impact, gold is used sparingly as a secondary accent rather than a dominant color.

---

## Accent Color

**Decision:** Use Palmetto Green (`#2F6F5F`) as the accent color.

**Reasoning:**

The green accent reflects Florida's natural environment while directly referencing the program's name, *Palmetto Coast High Leadership Academy*. It introduces a sense of regional identity and balances the more formal navy-and-gold palette, preventing the interface from appearing overly institutional or generic.

---

# Site Architecture Decisions

## Temporary Announcements and Events

**Decision:** Treat announcements and events as temporary content rather than maintaining permanent archives.

**Reasoning:**

School organizations primarily communicate information that is relevant in the present. Automatically removing outdated announcements and events after a defined period:

- reduces visual clutter
- simplifies long-term maintenance
- keeps content current
- allows visitors to quickly find relevant information

This approach better serves cadets, parents, instructors, and prospective students than maintaining an extensive archive.

---

## Activity-Based Gallery Organization

**Decision:** Organize the gallery by activity rather than by school year.

**Reasoning:**

Visitors are generally more interested in the experiences offered by the program than the specific year a photograph was taken. Organizing images by activity keeps related content together, making the gallery easier to browse and more intuitive to navigate.

Each gallery section initially displays a limited number of photographs, with a **"View More"** button allowing visitors to expand the section without leaving the page. This keeps the page manageable while allowing the gallery to grow over time.

---

## JSON-Driven Gallery Content

**Decision:** Load gallery content dynamically from JSON.

**Reasoning:**

Separating content from presentation allows instructors or cadets to add, remove, or update photographs without modifying the website's HTML. This improves maintainability while reducing the likelihood of accidental layout changes.

Each image includes:

- a descriptive title displayed beneath the photograph
- meaningful alternative text for accessibility

Selecting an image opens the full-size version in the browser's native image viewer.

---

## Native Browser Image Viewer

**Decision:** Open gallery images using the browser's native image viewer instead of implementing a custom lightbox.

**Reasoning:**

A custom lightbox was considered during the design process but ultimately rejected. While it would have provided navigation controls and in-page viewing, it also introduced additional JavaScript complexity, accessibility considerations, and ongoing maintenance requirements.

Using the browser's built-in image viewer provides several advantages:

- reduces implementation complexity
- improves long-term maintainability
- relies on familiar browser behavior
- minimizes accessibility concerns
- aligns with the project's emphasis on simplicity and reliability

For this website, the additional complexity of a custom lightbox does not provide sufficient user benefit to justify its implementation.
