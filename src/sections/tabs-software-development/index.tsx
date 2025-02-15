import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export interface SoftwareDevelopmentPost {
  id: number;
  heading: string;
  titleone: string;
  titletwo?: string;
  titlethree?: string;
  imageUrl?: string;
}

export interface StandardPost {
  id: number;
  title: string;
  titleone: string;
  titletwo: string;
  titlethree: string;
  date: string;
  commentCount: number;
  shareCount: number;
  heading: string;
  imageUrl?: string;
}

type Post = SoftwareDevelopmentPost | StandardPost;

const categories = [
  {
    name: 'Software Development',
    posts: [
      {
        id: 1,
        heading: 'Software Development',
        titleone:
          'Custom Software Development: Tailor-made solutions to meet your unique business needs.',
        titletwo:
          'Enterprise Software Solutions: Scalable and robust software for large-scale operations.',
        titlethree:
          'Software Maintenance and Support: Ensuring your software runs smoothly and efficiently.',
        imageUrl: 'assets/images/landing/software/1.png', // Replace with actual image URL
      } as SoftwareDevelopmentPost,
    ],
  },
  {
    name: 'Web Development',
    posts: [
      {
        id: 1,
        heading: 'Web Development',
        titleone:
          'Full-Stack Web Development: From front-end to back-end, comprehensive web solutions.',
        titletwo:
          'E-commerce Development: Building secure and scalable online stores.',
        titlethree:
          'Content Management Systems (CMS): Easy-to-manage web platforms for your content.',
        imageUrl: 'assets/images/landing/software/2.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'Mobile App Development',
    posts: [
      {
        id: 1,
        heading: 'Mobile App Development',
        titleone:
          'iOS App Development: High-performance apps for Apple devices.',
        titletwo: 'Android App Development: Innovative apps for Android users.',
        titlethree:
          'Cross-Platform App Development: Unified apps for multiple platforms.',
        imageUrl: 'assets/images/landing/software/3.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'Blockchain Development',
    posts: [
      {
        id: 1,
        heading: 'Blockchain Development',
        titleone:
          'Cryptocurrency Development: Secure and reliable digital currency solutions.',
        titletwo:
          'Smart Contract Development: Automated and trustworthy contract solutions.',
        titlethree:
          'Blockchain Consulting: Expert guidance on blockchain technology.',
        imageUrl: 'assets/images/landing/software/4.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'Metaverse Development',
    posts: [
      {
        id: 1,
        heading: 'Metaverse Development',
        titleone: 'Virtual World Creation: Immersive digital environments.',
        titletwo:
          '3D Modeling and Design: High-quality 3D assets for the metaverse.',
        titlethree:
          'Metaverse Integration: Seamless integration with existing systems.',
        imageUrl: 'assets/images/landing/software/5.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },

  {
    name: 'Web3 Development',
    posts: [
      {
        id: 1,
        heading: 'Web3 Development',
        titleone:
          'Decentralized Applications (DApps): Cutting-edge decentralized solutions.',
        titletwo: 'NFT Development: Unique and secure digital assets.',
        titlethree: 'Web3 Consulting: Strategic advice on Web3 technologies.',
        imageUrl: 'assets/images/landing/software/6.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'IT Consulting',
    posts: [
      {
        id: 1,
        heading: 'IT Consulting',
        titleone:
          'IT Strategy and Planning: Comprehensive IT roadmaps for your business.',
        titletwo:
          'Technology Assessment: Evaluating and optimizing your tech stack.',
        titlethree:
          'Security Consulting: Ensuring your systems are secure and compliant.',
        imageUrl: 'assets/images/landing/software/7.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'Digital Transformation',
    posts: [
      {
        id: 1,
        heading: 'Digital Transformation',
        titleone:
          'Business Process Automation: Streamlining operations through technology.',
        titletwo:
          'Data Analytics and Insights: Turning data into actionable insights.',
        titlethree:
          'Cloud Migration: Moving your operations to the cloud seamlessly.',
        imageUrl: 'assets/images/landing/software/8.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  {
    name: 'Digital Marketing',
    posts: [
      {
        id: 1,
        heading: 'Digital Marketing',
        titleone: 'SEO Services: Enhancing your online visibility.',
        titletwo:
          'Social Media Marketing: Engaging your audience on social platforms.',
        titlethree:
          'Content Marketing: Creating compelling content to attract and retain customers.',
        imageUrl: 'assets/images/landing/software/9.png', // Replace with actual image URL
      },
    ] as StandardPost[],
  },
  // Repeat similarly for other categories
];

export default function Example() {
  return (
    <div className="container_container__az_fT mb-20 overflow-hidden">
      <div className="text-center">
        <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
          Software Development
        </h2>
        <p>
          We offer steadfast and future-ready software development solutions for
          businesses and startups. Leverage our technical expertise to create
          bespoke software solutions for your business.
        </p>
      </div>

      <div className="flex  w-full justify-center pt-8">
        <div className="w-4/5 w-full">
          <TabGroup>
            <TabList className="inline-block gap-4 text-center">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="m-2 rounded-full bg-gray-300 px-3 py-1 text-sm/6 font-semibold text-primary text-slate-950 focus:outline-none data-[hover]:bg-primary/5 data-[selected]:bg-sky-500/100 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white dark:bg-gray-300/10 dark:text-white dark:data-[selected]:bg-sky-500/100"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel
                  key={name}
                  className="mx-auto max-w-[1000px] rounded-xl p-3"
                >
                  <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="flex flex-col items-center gap-4 lg:flex-row"
                      >
                        <div className="lg:col-span-1">
                          <a href="#" className="font-semibold text-white">
                            {isSoftwareDevelopmentPost(post) ? (
                              <>
                                <span className="mb-2 block text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl">
                                  {post.heading}
                                </span>
                                <ul className="mt-5 list-disc ps-4">
                                  <li className="text-gray-700">
                                    {post.titleone}
                                  </li>
                                  <li className="mt-2 text-gray-700">
                                    {post.titletwo}
                                  </li>
                                  <li className="mt-2 text-gray-700">
                                    {post.titlethree}
                                  </li>
                                </ul>
                              </>
                            ) : (
                              <>
                                {/* <span className="block text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl mb-2">
                                  {post.title}
                                </span>
                                <p>{post.title}</p> */}
                              </>
                            )}
                          </a>
                        </div>
                        {isSoftwareDevelopmentPost(post) && post.imageUrl ? (
                          <div className="lg:col-span-1">
                            <img
                              src={post.imageUrl}
                              alt={post.heading}
                              className="rounded-md"
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}

// Type guard function
function isSoftwareDevelopmentPost(
  post: Post
): post is SoftwareDevelopmentPost {
  return (post as SoftwareDevelopmentPost).titleone !== undefined;
}
