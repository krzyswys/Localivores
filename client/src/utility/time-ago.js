import React from 'react';

export const TimeAgo = ({ date }) => {

  const parseDate = (inputDate) => {
    const parts = inputDate.split(".");
    return new Date(parts[2], parts[1] - 1, parts[0]);  // miesiące w JS są indeksowane od 0 do 11
  };

  const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear();
  };

  const timeSince = (date) => {
    if (isToday(date)) return "Today";

    const today = new Date();
    const diffInYears = today.getFullYear() - date.getFullYear();
    const diffInMonths = (today.getMonth() - date.getMonth()) + (diffInYears * 12);
    const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));

    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
    }
    if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
    }
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }

    return 'Today';
  };

  return <span>{timeSince(parseDate(date))}</span>;
};
