const breakpointSizes = {
    tablet: '720px', // tablet-s
    laptop: '1024px', // tablet-l
    desktop: '1280px', // desktop-s
};

export default {
    tablet: `(min-width: ${breakpointSizes.tablet})`,
    laptop: `(min-width: ${breakpointSizes.laptop})`,
    desktop: `(min-width: ${breakpointSizes.desktop})`,
};