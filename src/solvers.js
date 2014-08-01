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
 var solution = undefined;
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// window.countNRooksSolutions = function(n) {
// var solutioncount = undefined;

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// }


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
    var solutionCount = 0;
    //create the board
    var board = new Board({n:n});


    //var findSolutions = function(){
    var findSolutions = function(currentRow, n) {

       //reach end of rows
       if(currentRow === n)
        {
        solutionCount++;
     //   console.log(solutionCount);
          return;
        }


  //loop through positions on row
  //
      for(var i = 0; i < n; i++)
      {
    // toggle chesspiece on
   // console.log(board.togglePiece(0,0));
       board.togglePiece(currentRow, i);
   //  console.log("FIND SOLUTIONS HAS EXECUTED");
      // if collision
     // console.log(board);
     // console.log(board.hasAnyRooksConflicts());
      if(!board.hasAnyRooksConflicts()){
        findSolutions(currentRow + 1, n);
      }
      // yes ---> disregard potential solutions
      // no ---> continue branching
    //toggle chesspiece off
    board.togglePiece(currentRow, i);
      }
    };

     // console.log(findSolutions);
     // console.log(n);
     // console.log(board);



    findSolutions(0, n);

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
