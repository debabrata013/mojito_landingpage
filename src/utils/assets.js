// Utility function to get correct asset path for GitHub Pages
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return base + path.replace(/^\//, '');
};

// For images
export const getImagePath = (imagePath) => {
  return getAssetPath(`images/${imagePath.replace(/^\/images\//, '')}`);
};

// For videos
export const getVideoPath = (videoPath) => {
  return getAssetPath(`videos/${videoPath.replace(/^\/videos\//, '')}`);
};
