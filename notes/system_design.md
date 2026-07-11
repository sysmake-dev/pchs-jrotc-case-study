# SYSTEM DESIGN

## OVERVIEW

This system is designed to allow non-technical users (students / cadets) to update specific content on the website without affecting the layout, structure, or design.

The goal is to ensure long-term stablility while allowing controlled flexibility for content updates.

## CORE PRINCIPLE

The system is built on a strict separation between

- **Structure (static)**
- **Content (dynamic)**

Students can only modify content. They cannot modify structure.

## CONTENT TYPES

### STATIC CONTENT (LOCKED)

These elements are not editable by students:

- Page layouts
- Navigation
- Section structure
- Styling (CSS)
- Core program descriptions

These are maintained by the developer.

### DYNAMIC CONTENT (EDITABLE)

These elements can be updated:

- Announcements
- Events
- Cadet leadership roles
- Gallery images
- Resources

Each content type is stored in a structured data file.

## FILE STRUCTURE

```
content
├── announcements.json
├── events.json
├── gallery.json
└── leadership.json
```

Each file represents a single content type.

## DATA STRUCTURE

### ANNOUNCEMENTS

```json
[
  {
    "title": "Drill Practice This Friday",
    "date": "2026-03-28",
    "content": "All cadets are required to attend drill practice after school."
  }
]
```

### EVENTS

```json
[
  {
    "name": "Field Training Exercise",
    "date": "2026-04-02",
    "location": "School Bus Ramp",
    "description": "Full-day training event for all cadets."
  }
]
```

### LEADERSHIP

```json
[
  {
    "role": "Battaltion Commander",
    "name": "Cadet John Smith",
    "description": "Oversees all program operations."
  }
]
```

### GALLERY

```json
[{ "image": "images/event1.jpg", "caption": "Cadets during drill practice." }]
```

## CONTENT RULES

To maintain consistency and prevent errors:

- Fields must not be renamed
- Required fields must not be removed
- Files structure must remain intact
- Content should follow the intended format

This ensures the site continues to function correctly.

## UPDATE WORKFLOW

This is the intended process for updating content:

1. Open the appropiate file in the `/content` directory
2. Add a new entry or update an existing one
3. Save the file
4. Refresh the website

No coding knowledge is required.

## ERROR PREVENTION

The system is designed to reduce the impact of mistakes:

- Structured JSON format enforces consistency
- Limited editable areas prevent layout issues
- Clear field names reduce confusion
- Static structure ensures site stability

## SCALABILITY

The system can be extended by:

- Adding new content files
- Expanding existing data structures
- Introducing additional section that follow the same pattern

This allows the website to grow without redesigning the entire system.

## FUTURE IMPROVEMENTS

Possible enhancements include:

- Simple admin interface for editing content
- Form-based content updates
- Validation for content entries
- Automated deployment after updates

## SUMMARY

This system provides a simple, controlled method for maintaining a website managed by rotating, non-technical users (students / cadets).

It ensures stability, consistency, ease of use, and long-term maintainability while still allowing the program to stay active and up to date.
