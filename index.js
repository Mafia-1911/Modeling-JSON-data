//calling from the api
//the api data (data coming from a api )
const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
const ulParent= document.createElement('ul');
for (let game of warriorsGames) {
  // ul>>li(game)
  const gameLi= document.createElement('li'); 
  ulParent.appendChild(gameLi);

  const{  homeTeam,awayTeam  }=game;
  const {team:hTeam,points:hPoints}= homeTeam;
  const {team:aTeam,points:aPoints}= awayTeam;

  const teamNames=`${hTeam}--${aTeam}`;
  const scoreLine;console.log(scoreLine);
  gameLi.textContent=`${teamNames}--${scoreLine}`;
  //comparing the winner 
  if (hPoints>aPoints) {
    scoreLine=`<b>${hPoints}</b>-- ${aPoints}` ;
  }else{scoreLine=`${hPoints} -- <b>${aPoints}</b>` ;
 }
  
  
  console.log(homeTeam.team,awayTeam.team);
}
document.body.append(ulParent);

//get the points of each team 

