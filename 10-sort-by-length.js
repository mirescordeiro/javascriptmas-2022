function sortByLength(strs) {
  return strs.sort((a,b)=> a.length - b.length);
}
const strs = ["abc", "", "aaa", "a", "zz"];
console.log(sortByLength(strs));
// ["", "a", "zz", "abc", "aaa"]