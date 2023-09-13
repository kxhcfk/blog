export const classNames = (...classes: Array<string | boolean | null | undefined>): string => {
    return classes
        .filter(Boolean)
        .join(" ");
};