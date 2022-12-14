export const getInitials = (string) => {
    const abbreviatedName = string === undefined ? "" : string.slice(0, 1)
    return abbreviatedName;
}
