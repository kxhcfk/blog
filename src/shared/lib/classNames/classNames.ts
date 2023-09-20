interface classNamesProps extends Array<string | boolean | null | undefined> {}

export const classNames = (...classes: classNamesProps): string => classes
    .filter((cls) => Boolean(cls) && typeof cls === 'string')
    .join(' ');
