export const getInitials = (string) => {
    const abbreviatedName = string === undefined ? "" : string.slice(0, 2)
    return abbreviatedName;
}
