module.exports = (hex, alpha = 1) => {
    hex = hex || 'ffffff';
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};