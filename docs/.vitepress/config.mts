import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LabDocs",
  description: "KUET CSE Lab Works and Docs by @Faysal",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'CSE 3202 : OS',
        collapsed: false,
        items: [
          { text: 'Lab 1: Intro to Terminal', link: '/CSE_3202-OS_Lab/Lab_1/README' },
          { text: 'Lab 2: Intro to Bash', link: '/CSE_3202-OS_Lab/Lab_2/README' },
          { text: 'Lab 3: Intro to Bash 2', link: '/CSE_3202-OS_Lab/Lab_3/README' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Faysal-star/3-2_Lab_works' }
    ]
  }
})
