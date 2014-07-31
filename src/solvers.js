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

// window.countNRooksSolutions = function(n) {
// var solutioncount = undefined;

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// }


window.countNRooksSolutions = function(n) {
  var temp = n*n;
  temp = Math.round(temp);
 var solutioncount = window.countNRooksSolution(n,temp);

  return solutioncount[0];

}

var extend = function(obj) {
    if(arguments.length ===1)
    {
      return obj;
    }
    else
    {
     var args =Array.prototype.slice.call(arguments,1);
    _.each(args, function(value,key){

     for(key in value)
      {
        obj[key] = value[key];
      }
    });

return obj;





    }

  };


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolution = function(n, maxCell, oldBoardState, oldClearedStates,oldRooks, solution, oldCurrentCell) {
      //console.log(n != undefined);
       if(n != undefined){
        var solution = new Board({n:n});
  console.log(solution.attributes)   ;
         var currentBoardState = solution.rows();
  console.log("Testing= " + solution.rows());

         var oldClearedStates = {};
         var rooks = 0;
          console.log(solution.get('n'));

       }
       else
       {

         var currentBoardState = oldBoardState;
        console.log("CurrentBoardState ||AFTER = " +currentBoardState);
         var clearedStates = oldClearedStates;
         rooks = oldRooks;


         solution.attributes = extend({},currentBoardState,{n:currentBoardState.length})

       }
    if(maxCell)
      {
      var currentCell = 0;
      }
    else
    {
      var currentCell = 0;

    }

         var solutionCount = [0, oldClearedStates]; //fixme

       if(rooks === currentBoardState.length)
        {
//          var hasBeenDone = false;
// debugger;
//          for(var t = 0; t < clearedStates.length; t++)
//          {

//  console.log(clearedStates[t]);
//  console.log("current Board state: " + currentBoardState);
//  console.log("rook count = " + rooks);
//           if(clearedStates[t] === currentBoardState)
//           {
//            hasBeenDone = true;
//           }
      if(solutionCount[1][currentBoardState])
      {
        return solutionCount;
      }


//       }

//        if(hasBeenDone === false)
//          {

         // solutionCount[1].push(currentBoardState);
          solutionCount[0] += 1;
          solutionCount[1][currentBoardState] = currentBoardState;
         // console.log("Stored!        " + currentBoardState);
         // console.log("Cleared states: " +clearedStates);
         // }

         return solutionCount;
        }



//console.log("CurrentBoardState = " +currentBoardState);
  for(var r = 0; r < currentBoardState.length; r++){
      for(var c = 0; c < currentBoardState[r].length; c++) {
           var rowConflictExists = false;
           currentCell +=1;
        if(currentBoardState[r][c] === 0) {
            currentBoardState[r][c] = 1;

         solution.attributes = extend({},currentBoardState,{n:currentBoardState.length})

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


         solution.attributes = extend({},currentBoardState,{n:currentBoardState.length})

            if(currentBoardState[r][c] === 1)
            {
            //recursive function call;
         //   console.log("CurrentBoardState ||BEFORE = " +currentBoardState);
            var returnArr = window.countNRooksSolution(undefined, undefined, currentBoardState, solutionCount[1], rooks, solution);
            //add to solutioncount
                solutionCount[0] = solutionCount[0] + returnArr[0];

                 solutionCount[1] = extend(solutionCount[1], returnArr[1]);



                currentBoardState[r][c] = 0;

         solution.attributes = extend({},currentBoardState,{n:currentBoardState.length})

                rooks -=1;

            }
          }
    // if(currentCell === maxCell)
    // {
    //   break;
    // }

        }

 // if(currentCell === maxCell)
 //    {
 //      break;
 //    }


      }





  //console.log('Number of solutions for ' + solution.rows().length + ' rooks:', solutionCount);
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
