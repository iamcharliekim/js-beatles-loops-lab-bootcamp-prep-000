function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)}
  return newArray;
}

function johnLennonFacts(facts){
  var shoutedFacts = [];
  let i = 0;
  while (facts.length > 0){
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return shoutedFacts;
}