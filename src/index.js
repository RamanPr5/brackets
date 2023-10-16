module.exports = function check(str, bracketsConfig) {
  const stack = [];

  function openConfig(bracketsConfig){
    let openArr = [];
    for(let i = 0; i < bracketsConfig.length; i++){
      openArr.push(bracketsConfig[i][0]);
    }
    return openArr;
  }
  
  function closeConfig(bracketsConfig){
    let closeArr = [];
    for(let i = 0; i < bracketsConfig.length; i++){
      closeArr.push(bracketsConfig[i][1]);
    }
    return closeArr;
  }

  const openArr = openConfig(bracketsConfig);
  const closeArr = closeConfig(bracketsConfig);
  for(let i = 0; i < str.length; i++){
    if(openArr.includes(str[i]) && (stack.length === 0 || closeArr.indexOf(str[i]) !== openArr.indexOf(stack[stack.length-1]))){
      stack.push(str[i]);
    } else {
      if(closeArr.indexOf(str[i]) === openArr.indexOf(stack[stack.length-1])){
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
