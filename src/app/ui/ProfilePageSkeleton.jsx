import React from "react";

const ProfilePageSkeleton = () => {
  return (
    <div class="animate-pulse">
      <div class="max-h-[200px] overflow-hidden h-60 bg-gray-200 rounded-t-lg"></div>
      <div class="p-3 flex flex-col justify-between h-1/4">
        <div class="h-6 mb-2 bg-gray-200 rounded w-3/4"></div>
        <div class="flex items-center mb-2">
          <div class="w-4 h-4 bg-gray-200 rounded mr-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div class="flex items-center">
          <div class="w-4 h-4 bg-gray-200 rounded mr-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
