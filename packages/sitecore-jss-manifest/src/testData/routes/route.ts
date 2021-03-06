export default {
  name: 'welcome',
  displayName: 'Welcome',
  placeholders: {
    main: [
      {
        componentName: 'Welcome',
        fields: {
          title: {
            value: 'Sitecore Experience Platform + JSS',
          },
          text: {
            // tslint:disable-next-line:max-line-length
            value: '<p>From a single connected platform that also integrates with other customer-facing platforms, to a single view of the customer in a big data marketing repository, to completely eliminating much of the complexity that has previously held marketers back, the latest version of Sitecore makes customer experience highly achievable. Learn how the latest version of Sitecore gives marketers the complete data, integrated tools, and automation capabilities to engage customers throughout an iterative lifecycle – the technology foundation absolutely necessary to win customers for life.</p><p>For further information, please go to the <a href="https://doc.sitecore.net/" target="_blank" title="Sitecore Documentation site">Sitecore Documentation site</a></p>',
          },
          logoImage: {
            value: {
              src: '/assets/img/sc_logo.png',
              alt: 'Logo',
            },
          },
        },
      },
    ],
  },
};
