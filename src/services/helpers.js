export const host = process.env.HOST;

export const sitePageUrl = (group, uuid) => {
    return `${host}/site#${group}$${uuid}`;
}

export const deepFind = (obj, path) => {
    if (!obj) { return undefined; }
    var paths = path.split('.')
        , current = obj
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}