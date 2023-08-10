function sinking(participant,rounds){
    //codehere
    for (let i = 0; i < rounds.length; i++) {
       participant = participant - (participant % rounds[i]);
    }
    return participant;
   }

// Example usage:
const initialParticipants = 15;
const rounds = [4, 2, 5, 3, 2];
const remainingParticipants = sinking(initialParticipants, rounds);
console.log("Participants left:", remainingParticipants);
