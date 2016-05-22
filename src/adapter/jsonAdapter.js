const faqs = (filter='all') => `/mocks/faqs-${filter}.json`;
const sections = section => `/mocks/section-${section}.json`;

export default {
  faqs,
  sections
};
