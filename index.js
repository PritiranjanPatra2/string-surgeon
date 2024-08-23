 export function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
 export function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}

 export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') 
        .replace(/\s+/g, '-')        
        .replace(/-+/g, '-');       
}


 export function toSnakeCase(str) {
    return str
        .replace(/\s+/g, '_')
        .toLowerCase();
}


 export function reverseString(str) {
    return str.split('').reverse().join('');
}


export function truncate(str, length) {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}


