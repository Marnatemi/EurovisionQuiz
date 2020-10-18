const correctVerbFormForCountry = (verb, country) => {
    
  const lastLetter = country.substring(country.length - 1)
  // console.log(country)
  
  if(verb !== ""){
    if (lastLetter === "a" || 
        lastLetter === "o" ||
        lastLetter === "y"){
      // console.log(country, lastLetter, verb)
 
      verb = verb + lastLetter
    }
  }
  return verb  
}

export default correctVerbFormForCountry