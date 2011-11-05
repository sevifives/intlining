// ==========================================================================
// Project:   CoreBrochurno.Section Fixtures
// Copyright: @2011 Jason Dooley
// ==========================================================================
/*globals CoreBrochurno */

sc_require('models/section_model');

CoreBrochurno.Section.FIXTURES = [
  {
    guid: 1,
    title: 'Int Lining',
    description: "<h2>When you need a company to install your geosynthetic projects, you have a world of options to choose from, from huge multinational corporations to local, trusted friends</h2><p>At International Lining Technology, we\'re proud to offer you the best of both worlds—truly global experience, plus a commitment to flawless installations and world-class customer service. What’s more, we back it up with quality materials and seal the deal with a conscientious commitment to quality from start to finish. If these things are important to you, we\'d love to put our team to work for you.</p><p>You can depend on us for a high level of customer service and reliability to ensure your project is completed safely, on time, on budget, and with the quality and value you expect and deserve. Best of all, we back up our workmanship with our own \"No Unhappy Customers\" Guarantee.&#153;</p><p>Your business means the world to us. For a competitive bid or more information, please call us toll-free today. 1-866-740-2929</p>",
  },

  {
    guid: 2,
    title: 'About',
    description: "<h2>International Lining Technology is proud to offer the following professional services. Call today for a competitive bid on your next geosynthetic project.</h2><p>When you place your trust in International Lining Technology, we mobilize a dedicated team of installers who are trained and approved for the specific materials used on your project. Our professional personnel and leading-edge equipment ensure quality installations designed to meet or exceed GRI and ASTM standards. Most importantly, we stand behind our workmanship with our industry-leading \"No Unhappy Customers\" Guarantee.™</p>",
    articles: [1,2]
  }
];
