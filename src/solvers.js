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
  var solution = new Board({n:n});
    for(var r = 0; r < solution.rows().length; r++){
      for(var c = 0; c < solution.rows()[r].length; c++) {

        if(solution.rows()[r][c] === 0) {
            solution.rows()[r][c] = 1;
              if(solution.hasAnyRowConflicts()){
                 solution.rows()[r][c] = 0;
              }
              if(solution.hasAnyColConflicts()){
                 solution.rows()[r][c] = 0;
              }
        }
      }
    }

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

window.countNRooksSolutions = function(n) {
var solutioncount = undefined;

  console.log('Number of solutions for ' + solution.rows().length + ' rooks:', solutionCount);
  return solutionCount;
return solutioncount;
}
/*

window.countNRooksSolutions = function(n) {
 var solutioncount = window.countNRooksSolution(n);

return solutioncount[0];
}

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolution = function(n, oldBoardState, oldClearedStates,oldRooks, solution) {

       if(n != undefined){
        var solution = new Board({n:n});
         var currentBoardState = solution.rows();
         var clearedStates = [];
         var rooks = 0;

       }
       else
       {
         var currentBoardState = oldBoardState;
         var clearedStates = oldClearedStates;
         rooks = oldRooks;

         solution.attributes = currentBoardState;
         console.log(solution.attributes);
       }


         var solutionCount = [0, clearedStates]; //fixme

       if(rooks === currentBoardState.length)
        {  var hasBeenDone = false;


         for(var t = 0; t < oldClearedStates.length; t++)
         {
          if(oldClearedStates[t] === currentBoardState)
          {
           hasBeenDone = true;
          }



      }

       if(hasBeenDone === false)
         {
          solutionCount[0] += 1;
         }

         return solutionCount;
        }




  for(var r = 0; r < currentBoardState.length; r++){
      for(var c = 0; c < currentBoardState[r].length; c++) {
           var rowConflictExists = false;
        if(currentBoardState[r][c] === 0) {
            currentBoardState[r][c] = 1;
            rooks += 1;


              if(solution.hasAnyRowConflicts()){
                 currentBoardState[r][c] = 0;
                 rooks -= 1;
                rowConflictExists = true;
              }


             if(!rowConflictExists)
              {
              if(solution.hasAnyColConflicts()){
                 currentBoardState[r][c] = 0;
                 rooks -= 1;
               }
              }


            if(currentBoardState[r][c] === 1)
            {
            //recursive function call;
            var returnArr = window.countNRooksSolution(undefined, currentBoardState, clearedStates, rooks, solution);
            //add to solutioncount
                solutionCount[0] = solutionCount[0] + returnArr[0];
            }
          }


        }




      }





  console.log('Number of solutions for ' + solution.rows().length + ' rooks:', solutionCount);
  return solutionCount;
};

*/

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
