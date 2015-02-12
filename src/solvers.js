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
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var rows = board.rows();


  var recursiveFn = function(rowNum){
    if(rowNum === n){
      solutionCount++;
      return;
    }
    var row = rows[rowNum];
    for(var k=0; k<row.length; k++) {
      row[k] = 1;
      if( board.hasRowConflictAt(rowNum) || board.hasColConflictAt(k) ) {
        row[k] = 0;
      } else {
          rowNum++;
          recursiveFn(rowNum);
          row[k] = 0;
          rowNum--;
        }
      }
      return;
    }
    recursiveFn(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var rows = board.rows();
  var boardCopy;
  var solutions = [];


  var recursiveFn = function(rowNum){
    if(rowNum === n){
      boardCopy = _.map(rows, function(row) {
        return row.slice();
      });
      solutions.push(boardCopy);
      solutionCount++;
      return;
    }
  var row = rows[rowNum];
  for (var k=0; k<row.length; k++) {
    row[k] = 1;
    if( board.hasRowConflictAt(rowNum) || board.hasColConflictAt(k) || board.hasAnyMinorDiagonalConflicts() || board.hasAnyMajorDiagonalConflicts() ) {
      row[k] = 0;
    } else {
      rowNum++;
      recursiveFn(rowNum);
      row[k] = 0;
      rowNum--;
    }
  }
  return;
  }
  recursiveFn(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutions[0] || board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var rows = board.rows();

  if( n===0 ) {
    return solutionCount + 1;
  }

  if (n===2 || n===3) {
    solutionCount = 0;
    return solutionCount;
  }
  var recursiveFn = function(rowNum){
    if(rowNum === n){
      solutionCount++;
      return;
    }
  var row = rows[rowNum];
  // debugger;
  for (var k=0; k<row.length; k++) {
    row[k] = 1;
    if( board.hasRowConflictAt(rowNum) || board.hasColConflictAt(k) || board.hasAnyMinorDiagonalConflicts() || board.hasAnyMajorDiagonalConflicts() ) {
      row[k] = 0;
    } else {
      rowNum++;
      recursiveFn(rowNum);
      row[k] = 0;
      rowNum--;
    }
  }
  return;
  }
  recursiveFn(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
