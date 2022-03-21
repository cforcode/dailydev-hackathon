import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Parser from 'rss-parser';

type CustomFeed = {
  description: string,
  feedUrl: string,
  generator: string,
  link: string,
  lastBuildDate: Date,
  items: CustomItem[]
};
type CustomItem = {
  guid: string,
  isoDate: Date,
  link: string,
  title: string,
  pubDate: Date,
  categories: string[]
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({});

const Home: NextPage = () => {

  const [feed, setFeed] = useState<CustomFeed>({
    description: '',
    feedUrl: '',
    generator: '',
    link: '',
    lastBuildDate: new Date(),
    items: []
  });

  useEffect(() => {
    (async () => {
      const RSS_URL = 'https://api.daily.dev/rss/b/cf22220a-87ea-43e8-9a73-308ae22456c6';
      const feed = await parser.parseURL(`${RSS_URL}`);
      console.log(feed);
      setFeed(feed);
    })();
  }, []);


  return (
    <div >
      <Head>
        <title>Deepgram Hackathon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center px-20">
        <h1 className='text-2xl mt-4 text-blue-600 font-bold'>{feed.description}</h1>
        <a className='mb-4' href={feed.link} target='_blank'>{feed.link}</a>
        {feed.items.map((item: CustomItem, key: number) =>
          <div className="py-2" key={key}>
            <div className="flex items-center space-x-4  bg-slate-50">
              <div className="flex-1 min-w-0 px-4 py-2">
                <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  {item.title}
                </p>
                <a href='#' className="text-sm font-light text-gray-500 truncate dark:text-gray-400 mb-2">
                  {`https://app.daily.dev/posts/${item.guid}`}
                </a>
              </div>
              <div className="flex-2 min-w-0 px-4 py-2">
                <div className='flex'>{item.categories?.map((category) =>
                  <div className='mr-2 p-2 rounded-lg text-blue-600 bg-blue-50 text-xs'>{category}</div>)}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
