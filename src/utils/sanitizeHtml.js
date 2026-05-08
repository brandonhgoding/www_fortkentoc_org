import DOMPurify from 'dompurify';

const purify = DOMPurify(window);

purify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

const ALLOWED_TAGS = ['a', 'b', 'i', 'u', 'br', 'p', 'ul', 'ol', 'li', 'strong', 'em'];
const ALLOWED_ATTR = ['href', 'target', 'rel'];

export function sanitizeEventDescription(html) {
  if (!html) return '';
  return purify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR });
}
