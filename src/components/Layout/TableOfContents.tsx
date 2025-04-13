'use client';

import { HeadingItem } from '@/model/post';
import { MouseEvent } from 'react';
import clsx from 'clsx';
import { useHeaderObserver } from '@/hooks/useIntersectionObserver';

interface Props {
  toc: HeadingItem[];
}

const headingType = (indent: number) => {
  switch (indent) {
    case 1:
      return 'ml-4';
    case 2:
      return 'ml-8';
    default:
      return '';
  }
};

const TableOfContents = ({ toc }: Props) => {

  const { activeHierarchy } = useHeaderObserver('h1, h2, h3', {
    root: null,
    rootMargin: '0px 0px -80% 0px',
    threshold: 0,
  });

  const handleLinkClick =
    (link: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      // CSS selector로 안전하게 escape
      const safeSelector = CSS.escape(link.replace(/^#/, ''));
      const target = document.querySelector(`#${safeSelector}`);

      if (target) {
        const yOffset = 20; // 상단 고정 헤더 간격
        const y =
          target.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };


  return (
    <nav className={'hidden xl:fixed xl:block w-[220px] right-10 my-8 ml-2 mr-5'}>
      <div className={'font-bold '}>On this Page</div>
      <ul>
        {toc.map((item, index) => {
          return (
            <li
              key={item.link + index}
              className={clsx(
                activeHierarchy[0] === item.link.slice(1) && 'text-blue-400 font-bold',
                headingType(item.indent),
                'text-sm py-1 transition hover:text-blue-400',
              )}
            >
              <a href={item.link} onClick={handleLinkClick(item.link)}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
