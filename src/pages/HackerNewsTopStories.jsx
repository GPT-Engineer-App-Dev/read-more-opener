import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from '@/components/StoryCard';
import SkeletonLoader from '@/components/SkeletonLoader';
import SearchBar from '@/components/SearchBar';

const fetchTopStories = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = await response.json();
  const stories = await Promise.all(
    storyIds.slice(0, 100).map(async (id) => {
      const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return storyResponse.json();
    })
  );
  return stories;
};

const HackerNewsTopStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: stories, error, isLoading } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = stories?.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div>
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching stories</div>;
  }

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredStories.map((story) => (
        <StoryCard key={story.id} title={story.title} upvotes={story.score} url={story.url} />
      ))}
    </div>
  );
};

export default HackerNewsTopStories;