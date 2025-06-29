"use client";

import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { addBookmark, removeBookmark } from '@/lib/actions/comanion.actions';

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked?: boolean;
}

const CompanionCard = ({ id, name, topic, subject, duration, color, bookmarked } : CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };
  
  return (
    <article className='companion-card' style={{ backgroundColor: color }}>
        <div className='flex justify-between items-center'>
            <p className='subject-badge'>{subject}</p>
            <button className='companion-bookmark' onClick={handleBookmark}>
              <Image 
                src={
                  bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
                }
                alt='Bookmark'
                width={12.5}
                height={15}
                />
            </button>
        </div>

        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-sm'>Topic: {topic}</p>
        <div className='flex items-center gap-2'>
            <Image src={`/icons/clock.svg`} alt='duration Icon' width={13.5} height={13.5} />
            <p className='texsm'>{duration} min</p>
        </div>
        <Link href={`/companions/${id}`} className='w-full'>
            <Button className='btn-primary w-full justify-center'>
                Launch Lesson
            </Button>
        </Link>
    </article>
  )
}

export default CompanionCard