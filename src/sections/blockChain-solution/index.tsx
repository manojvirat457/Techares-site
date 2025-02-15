
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { SoftwareDevelopmentPost, StandardPost } from '../tabs-software-development';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { ServiceHeading } from '../blockChain-service/Service-Heading';
type Post = SoftwareDevelopmentPost | StandardPost;
type Category = {
    name: string;
    posts: Post[]; // Using the existing Post type (SoftwareDevelopmentPost | StandardPost)
};
interface Props {
    blockChainSolutions: SectionHeadingWithoutStylingProps;
    categories: Category[]; // Using the defined Category type
}


export default function Example({ blockChainSolutions, categories }: Props) {
    return (
        <div className="container_container__az_fT mb-20 mt-20 overflow-hidden">
            <div className="text-center w-full">
                <ServiceHeading {...blockChainSolutions} />
            </div>

            <div className="flex  w-full justify-center pt-8">
                <div className="w-4/5 w-full">
                    <TabGroup>
                        <TabList className="inline-block gap-4 text-center">
                            {categories && categories.map(({ name }) => (
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
                                                <div className="lg:col-span-1 w-3/4">
                                                    {isSoftwareDevelopmentPost(post) ? (
                                                        <>
                                                            <span className="mb-2 block text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl">
                                                                {post.heading}
                                                            </span>

                                                            <p className="text-white-700">
                                                                {post.titleone}
                                                            </p>

                                                        </>
                                                    ) : (
                                                        <>
                                                            {/* <span className="block text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl mb-2">
                                  {post.title}
                                </span>
                                <p>{post.title}</p> */}
                                                        </>
                                                    )}
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
