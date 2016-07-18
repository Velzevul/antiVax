export const blogposts = {
  id: 'blogposts',
  label: 'Blogposts'
}

export const sections = [
  {
    id: 'faqs',
    label: 'FAQs'
  },
  {
    id: 'about-vaccines',
    label: 'About Vaccines'
  },
  {
    id: 'vaccine-safety',
    label: 'Vaccine Safety'
  },
  {
    id: 'vaccination-schedule',
    label: 'Vaccination Schedule'
  },
  {
    id: 'about-project',
    label: 'About Project'
  },
  {
    id: 'additional-information',
    label: 'Additional Information'
  }
]

export const categories = [
  {
    id: 'diseases',
    label: 'Diseases'
  },
  {
    id: 'vaccines',
    label: 'Vaccines'
  },
  {
    id: 'ingridients',
    label: 'Ingridients'
  }
]

export const isSection = (id) => {
  return sections.map(s => s.id).indexOf(id) !== -1
}

export const isBlogpost = (id) => {
  return id === blogposts.id
}

export const isCategory = (id) => {
  return categories.map(c => c.id).indexOf(id) !== -1
}

export const getCurrentSection = (id) => {
  return sections.concat(categories).concat([blogposts]).filter(s => s.id === id)[0]
}
