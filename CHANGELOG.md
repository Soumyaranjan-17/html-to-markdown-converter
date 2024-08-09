## Version 1.0.0 - Initial Release

### Added
- Initial release of the HTML-to-Markdown converter.
- **Headings:** Support for HTML headings from `<h1>` to `<h6>`, converted to Markdown headings.
- **Paragraphs:** Basic support for HTML paragraphs (`<p>`), converted to plain text in Markdown.
- **Bold Text:** Conversion of `<strong>` tags to Markdown bold (`**bold**`).
- **Italic Text:** Conversion of `<em>` tags to Markdown italic (`*italic*`).
- **Underline Text:** Conversion of `<u>` tags to Markdown underline (`_underline_`).
- **Images:** Support for HTML images (`<img>`), converted to Markdown image syntax (`![alt text](url)`).
- **Links:** Conversion of `<a>` tags to Markdown links (`[text](url)`).

### Known Issues
- Images inside other tags may not render correctly.

### Future Plans
- Version 2: Add support for lists (ordered and unordered), blockquotes, code snippets.
- Version 3: Include tables, horizontal rules, and more advanced formatting.
- Version 4: Add support for additional HTML elements and custom tags.
