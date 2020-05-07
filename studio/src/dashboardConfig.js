export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3c5dceb169d16bf4df416',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-awan3h7r',
                  apiId: 'cb1d1549-f61b-46c7-8702-26caa6d4dacf'
                },
                {
                  buildHookId: '5eb3c5dc5a27a2ccfb661442',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ofgpke9o',
                  apiId: '6f4b7264-65d5-429a-b8ed-811aea2b0cea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freddieiboy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ofgpke9o.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
