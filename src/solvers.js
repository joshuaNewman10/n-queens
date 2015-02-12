/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var rows = board.rows();
  var row;
  for(var i=0; i<rows.length; i++) {
    row = rows[i];
    for(var j=0; j<row.length; j++) {
      row[j] = 1;
      if(board.hasRowConflictAt(i) || board.hasColConflictAt(j)) {
        row[j] = 0;
      }
    }

  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(rows));
  return rows;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var msolution = [];
  var arg = [];
  var board = new Board({n:n});
  var rows = board.rows();
  for(var i = 0; i<row.length; i++) {
    cell = rows[0][i];
    recursiveFn(cell);
    }
  }
  var recursiveFn = function(arg){
    if(arg.length === n){
      solution.push(arg);
    }
    for (var k = 1; k < n; k++) {
      for (var j = 0; j < rows.length; j++) {
        row[k][j] = 1;
        if(board.hasRowConflictAt(j) || board.hasColConflictAt(j)) {
          row[k][j] = 0;
          continue;
        } else {
          arg.push(row[k][j]);
          recursiveFn(arg);
          arg.pop()
        }
    }

  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
