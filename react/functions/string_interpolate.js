export default String.prototype.interpolate = function (obj) {
    const str = this;
    const regex_pattern = /\{\{ ([\w|\.]*) \}\}/gm;

    function newChain(match, path, pos, str) {
        return obj.prop_access(path);
    }

    return str.replace(regex_pattern, newChain);
}