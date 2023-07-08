const breakpoints = {
    mobileXs: "480px",
    mobile: "767px",
    tabletXs: "768px",
    tablet: "1023px",
    desktopXs: "1024px",
    desktop: "1280px",
    desktopXl: "1600px",
    desktopXXl: "1920px",
};

export const device = {
    mobileXs: `(max-width: ${breakpoints.mobileXs})`,
    mobile: `(max-width: ${breakpoints.mobile})`,
    tabletXs: `(max-width: ${breakpoints.tabletXs})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktopXs: `(max-width: ${breakpoints.desktopXs})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    desktopXl: `(max-width: ${breakpoints.desktopXl})`,
    desktopXXl: `(max-width: ${breakpoints.desktopXXl})`,
};
