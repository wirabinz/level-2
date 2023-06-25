// const pagesDatax = {
    // 1: {
        // id: 1,
        // header: 'Contact details',
        // subheader: 'Lorem ipsum dolor sit amet consectetur adipisc.',
    // },
    // 2: {
        // id: 2,
        // header: 'Our services',
        // subheader: 'Please select which service you are interested in.',
    // },
    // 3: {
        // id: 3,
        // header: 'What is your project budget?',
        // subheader: 'Please select the project budget you have in mind.',
    // },
    // 4: {
        // id: 4,
        // header: 'Submit your quote request',
        // subheader: 'Please review all the information you previously typed in the past step, and if all is okay, submit your message to receive a project quote in 24-48 hours.',
    // },
// }

const pagesData = [
  {
    pagenumber: 1,
    header: 'Contact details',
    subheader: 'Lorem ipsum dolor sit amet consectetur adipisc.',
  },
  {
    pagenumber: 2,
    header: 'Our services',
    subheader: 'Please select which service you are interested in.',
  },
  {
    pagenumber: 3,
    header: 'What is your project budget?',
    subheader: 'Please select the project budget you have in mind.',
  },
  {
    pagenumber: 4,
    header: 'Submit your quote request',
    subheader:
      'Please review all the information you previously typed in the past step, and if all is okay, submit your message to receive a project quote in 24-48 hours.',
  },
];

const inputFormData=[
  {
    title:'Name',
    icon:'user',
    errormessage:'Invalid name.',
    isValid:true,
  },
  {
    title:'Email',
    icon:'mail',
    errormessage:'Invalid email format.',
    isValid:true,
  },
  {
    title:'Phone Number',
    icon:'mobile',
    errormessage:'Invalid phone number.',
    isValid:true,
  },
  {
    title:'Company',
    icon:'building',
    errormessage:'Invalid company.',
    isValid:true,
  },
];

const serviceFormData=[
  {
    title:'Development',
    icon:'development',
  },
  {
    title:'Web Design',
    icon:'webdesign',
  },
  {
    title:'Marketing',
    icon:'marketing',
  },
  {
    title:'Other',
    icon:'other',
  },
];
  
const budgetFormData=[
  {
    budget:'$5000-$10000',
  },
  {
    budget:'$10.000-$20.000',
  },
  {
    budget:'$20.000-$50.000',
  },
  {
    budget:'$50.000+',
  },

];

