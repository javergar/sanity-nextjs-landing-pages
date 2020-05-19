export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec340ad1ad7a659f95450b9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-id3qqact',
                  apiId: '2a9db2fe-2717-4502-8f5c-90d1791d7056'
                },
                {
                  buildHookId: '5ec340ad8cb584d6fd8713e5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2qf8u47f',
                  apiId: '0820834f-f88e-4b28-b12f-99df3616ae81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/javergar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2qf8u47f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
