
// 1) index getFirstSelector(selector) returns the first element that matches the selector:
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// 2) index nestedTarget() pulls a .target out of #nested:
function nestedTarget() {
  return document.querySelector('#nested .target')
}
// 3) index deepestChild() returns the most deeply nested child in #grand-node:
//Define a function deepestChild() that pulls out the most deeply nested child
//from div#grand-node. (Remember, you can iterate over elements and call
//querySelector() and querySelectorAll() on them. This is challenging to implement
//correctly, but not beyond your ability!)
function deepestChild() {
  var deepChild = document.querySelectorAll('#grand-node div div div div')
  return deepChild[0]
}

// 4) index increaseRankBy(n) increases ranks in .ranked-list by n:
//Define a function increaseRankBy(n) that increases the ranks in all
//of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {

  const lis = document.querySelectorAll(`ul.ranked-list li`)

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }

}
